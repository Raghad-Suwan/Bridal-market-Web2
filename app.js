//express and path 
const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
app.set('view engine', 'ejs');

// mongodb connect
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://hadisawalmeh:123456789h@cluster0.se97yow.mongodb.net/BridalMarket")
const Users = require('./models/userschema')




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
                _id: { $ne: product._id } // استبعاد المنتج الحالي
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


//to navigate to the path I want and the images within the path


//To go to the desired image with pagination 

app.get('/eventproduct/:categoryName/:page', (req, res) => {
    const numofpage = parseInt(req.params.page);
    const numofproduct = 6;
    const categoryName = req.params.categoryName;

    Users.countDocuments({ category: categoryName })
        .then(totalProducts => {
            const totalPages = Math.ceil(totalProducts / numofproduct);
            return Users.find({ category: categoryName })
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

//productpage whit id 

//file home.ejs



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});