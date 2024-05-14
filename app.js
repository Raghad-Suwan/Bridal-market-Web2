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





app.get("/eventproduct", (req, res) => {
    Users.find()
    .then((result) => {res.render("index",{products: result})})
    .catch((err) => {
      console.log(err);
    } )
  })


  //dynamic product 

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


//To go to the desired image





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});