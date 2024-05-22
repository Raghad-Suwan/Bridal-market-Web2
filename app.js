const express = require("express");
const session = require("express-session");
const port = 5000; 
const path  = require('path');
const app = express();
const MongoDBStore = require("connect-mongodb-session")(session);
const MongidbStore=require('./mongodbStore/store')
const appControllers = require("./controllers/appControllers");

const signupUser = require('./routes/sign/signup-routes')
const LoginPage=require('./routes/Login/Login-routes')





app.set('view engine', 'ejs');

// Static files
const publicDir = path.join(__dirname, './public');
app.use(express.static(publicDir));

// Middleware to parse the body of POST requests
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());



// mongodb connect 


const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://hadisawalmeh:123456789h@cluster0.se97yow.mongodb.net/BridalMarket")
const Users = require('./models/userschema')




//routs


const home = require('./routes/home/home-routes')
const dashbordRoutes = require('./routes/dashbord/dashbord_routes')
const events =require('./routes/event/event-routes')
const profiles =require("./routes/profiles/profiles_routes");
const loading = require('./routes/sign/loadingpage')
const productpage = require('./routes/productPage/product-route');
const calender1 = require("./routes/calender/calender")
const signupUser = require('./routes/sign/sign-routes')
const signupProvider = require('./routes/sign/sign-routes');
const MaindashbordRoutes = require('./routes/Maindashbord/main_dashbord')


app.use(express.static(publicDir));
app.use('/calender1', calender1);
app.use('/calender2', calender1);
app.use('/dashbord', dashbordRoutes);
app.use('/eventproduct', events);
app.use('/dashbordMain', MaindashbordRoutes);
app.use('/profiles', profiles);
app.use('/loading', loading);
app.use('/productpage', productpage);
app.use('/signup', signupUser);
app.use('/', home);
app.use('/signupProvider', signupProvider);
app.use('/searchPage', productpage)
app.use('/Login',LoginPage)









//app

const sessionCookieLifeTime = 1000 * 60 * 15;



// Add product from MongoDB to product page
app.get("/eventproduct", async (req, res) => {
    Users.find()
        .then((result) => {
            res.render("index", {
                products: result
            });
        })
        .catch((err) => {
            console.log(err);
        });
});


app.get("/productpage/productpage/:id", (req, res) => {
    Users.findById(req.params.id)
        .then(product => {
            return Users.find({
                    category: product.category,
                    _id: {
                        $ne: product._id
                    } // استبعاد المنتج الحالي
                }).limit(4)
                .then(similarProducts => {
                    res.render("productpage", {
                        product: product,
                        similarProducts: similarProducts
                    });
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Server Error');
        });
});



app.use(
  session({
    secret: "Muy8fuSOYHDsR6WOCwNS6K6sy2QmhSEp",
    resave: false,
    saveUninitialized: false,
      cookie: { maxAge: sessionCookieLifeTime },
    store: MongidbStore,
  })
  //https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2Faux-sam%2Fnodejs%2Ftree%2Fmain%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR02TTL2cb_o8e6f52-OIVHe7bwgvnZU8a2eN7OFqlqYu7wwfk2OjfaA1Qs_aem_AaCGS-JRtka59oklW4jKYQOjrF0a6oVXGCxPawjitusRnYtQKsCJGCmFJNNlPrE_I1JlmSfRSW0f98k4N0uEbBAa&h=AT3FQOJsP0dvkfGaFrDlscsxVSgLoPUFwP7MnLZ58DIychTlHsdblw90vGwgZ0ZU227aRIOwQ4XDA3HtcCm9IaTzvbiA9yB8TaTHWToyT9XVgE7TpN-RPxqhSyumYa8Tm5-_-sNLlahUvjU
);





//To go to the desired image with pagination 

app.get('/eventproduct/:categoryName/:page', (req, res) => {
    const numofpage = parseInt(req.params.page);
    const numofproduct = 6;
    const categoryName = req.params.categoryName;

    Users.countDocuments({
            category: categoryName
        })
        .then(totalProducts => {
            const totalPages = Math.ceil(totalProducts / numofproduct);
            return Users.find({
                    category: categoryName
                })
                .skip((numofpage - 1) * numofproduct)
                .limit(numofproduct)
                .then(authorlist => {
                    res.render('index', {
                        products: authorlist,
                        categoryName: categoryName,
                        currentPage: numofpage,
                        totalPages: totalPages
                    });
                });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Server Error');
        });
});
//search
const searchModel = require("./models/Customer")
const Search = require("./models/search")

// path must be as the action attribute
app.post("/searchPage", (req, res) => {

    console.log(req.body)
    const search = new Search(req.body);
    search.save().then(() => {
        res.redirect("/searchPage")

    }).catch(err => console.error(err));
})
app.get('/searchPage', (req, res) => {
    searchModel.find({})
        .then(search => res.json(search))
        .catch(err => console.error(err));
    console.log(req.body)

});
//order
app.get("/dashbord/Order");

//redirect sign up page to home 
app.post("/signup/signup", (req, res) => {
    console.log(req.body)
    res.redirect("/")
})
//ERRORE 404
app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
});

//Maindashboard routes
const Provider = require('./routes/maindashboard/models/allproviders');
const User = require('./routes/maindashboard/models/allusers');

//home route for Maindashboard
app.get('/', (req, res) => {
    res.render('maindashboard')
});
app.get('/allserviceproviders', async (req, res) => {
    const providers = await Provider.find({});
    res.render('allserviceproviders', {
        providers,
        message: null
    });
});
app.get('/allusers', async (req, res) => {
    const users = await User.find({});
    res.render('allusers', {
        users,
        message: null
    });
});
const ActivationRoutes = require('./routes/maindashboard/activationroute');
const deleteProviderRoutes = require('./routes/maindashboard/deleteproviderroute');
const deleteUserRoutes = require('./routes/maindashboard/deleteuserroute');
app.use('/updateActivation', ActivationRoutes);
app.use('/deleteProvider', deleteProviderRoutes);
app.use('/deleteUser', deleteUserRoutes);







app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`);
});