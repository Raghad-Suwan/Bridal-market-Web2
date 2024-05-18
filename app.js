<<<<<<< HEAD
const express = require("express");
const session = require("express-session");
const port = 5000; 
const path  = require('path');
const MongoDBStore = require("connect-mongodb-session")(session);
const MongidbStore=require('./mongodbStore/store')
const appControllers = require("./controllers/appControllers");

const signupUser = require('./routes/sign/signup-routes')
const LoginPage=require('./routes/Login/Login-routes')
const home = require('./routes/home/home-routes')
const dashbordRoutes = require('./routes/dashbord/dashbord_routes')
const events =require('./routes/event/event-routes')
const profiles =require("./routes/profiles/profiles_routes");
const loading = require('./routes/sign/loadingpage')
const productpage = require('./routes/productPage/product-route')
//const signupProvider = require('./routes/sign/sign-routes');


const app = express();

//app

const sessionCookieLifeTime = 1000 * 60 * 15;


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

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

// Routes
app.use('/dashbord', dashbordRoutes );
app.use('/eventproduct', events);
app.use('/profiles', profiles );
app.use('/loading',loading);
app.use('/productpage',productpage);
app.use('/signup-user', signupUser);

app.use('/', home); 


 app.use('/Login',LoginPage)
 //app.use('/signupProvider',signupProvider);
=======
//express and path 
const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
app.set('view engine', 'ejs');

// mongodb connect
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/crud")
const Users =require('./models/userschema')

//models

//routs
const publicDir = path.join(__dirname, './public');
const dashbordRoutes = require('./routes/dashbord/dashbord_routes')
const events = require('./routes/event/event-routes')
const profiles = require("./routes/profiles/profiles_routes");
const home = require('./routes/home/home-routes')
const loading = require('./routes/sign/loadingpage')
const productpage = require('./routes/productPage/product-route')
const calender1 = require("./routes/calender/calender")
const signupUser = require('./routes/sign/sign-routes')
const signupProvider = require('./routes/sign/sign-routes');


app.use(express.static(publicDir));
app.use('/calender1', calender1);
app.use('/calender2', calender1);
app.use('/dashbord', dashbordRoutes);
app.use('/eventproduct', events);
app.use('/profiles', profiles);
app.use('/loading', loading);
app.use('/productpage', productpage);
app.use('/signup', signupUser);
app.use('/', home);
app.use('/signupProvider', signupProvider);
>>>>>>> 9c026594cb4abd89891e4570b94b527df1db998a


//add product from mongo to productpage

app.get("/eventproduct", (req, res) => {
    Users.find()
    .then((result) => {res.render("index",{products: result})})
    .catch((err) => {
      console.log(err);
    } )
  })


  //to navigate to the path I want and the images within the path

  app.get('/productpage/:categoryName', async (req, res) => {
    const categoryName = req.params.categoryName;
    try {
        // استرجاع المنتجات المتعلقة بالفئة categoryName من قاعدة البيانات
        const filteredProducts = await Users.find({ category:categoryName });

        res.render('index', { products: filteredProducts });
    } catch (error) {
        console.error(error);
        res.status(500).send('خطأ في استرجاع البيانات');
    }
});


//To go to the desired image with pagination 

app.get('/eventproduct/:categoryName/:page', async (req, res) => {
  const pagenumber = parseInt(req.params.page);
  const authorsperPage = 6;
  const categoryName = req.params.categoryName;
  try {
      const totalProducts = await Users.countDocuments({ category: categoryName });
      const totalPages = Math.ceil(totalProducts / authorsperPage);
      const authorlist = await Users.find({ category: categoryName })
                                    .skip((pagenumber - 1) * authorsperPage)
                                    .limit(authorsperPage);
      res.render('index', { 
          products: authorlist, 
          categoryName: categoryName, 
          currentPage: pagenumber, 
          totalPages: totalPages 
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('خطأ في استرجاع البيانات');
  }
});

//file home.ejs



app.listen(port, () => {
<<<<<<< HEAD
  console.log("App Running on http://localhost:5000");
});

=======
  console.log(`Example app listening at http://localhost:${port}`);
});
>>>>>>> 9c026594cb4abd89891e4570b94b527df1db998a
