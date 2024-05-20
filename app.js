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
const customersCon = require('./models/ConenctUsSchema')
const customersRes = require('./models/reservationSchema')

//Post form Conenct Us
app.use(express.urlencoded({extended: true}));
app.post('/conenct' ,async(req ,res) => {
  const{name ,email ,phonenumber ,message} = req.body
  const customerCon = new customersCon ({
    name ,
    email ,
    phonenumber,
    message
  })
  await customerCon.save()
  console.log(customerCon)
  res.redirect('/?messageview=Your message was sent successfully');
})
// Get a message confirming that the data is stored in the database
app.get('/', (req, res) => {
  const messageview = req.query.messageview;
  res.render('home', { messageview });
});

//Post form Reservation Confirmation
app.post('/resconf' ,async(req ,res) => {
  const{name ,email ,phone ,location} = req.body
  const customerRes = new customersRes ({
    name ,
    email ,
    phone,
    location
  })
  await customerRes.save()
  console.log(customerRes)
  res.redirect('/?messageview=Your reservation has been confirmed successfully');
})
// Get a message confirming that the data is stored in the database
app.get('/', (req, res) => {
  const messageview = req.query.messageview;
  res.render('home', { messageview });
});

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
app.use('/reservationConf', calender1);
app.use('/dashbord', dashbordRoutes);
app.use('/eventproduct', events);
app.use('/profiles', profiles);
app.use('/loading', loading);
app.use('/productpage', productpage);
app.use('/signup', signupUser);
app.use('/', home);
app.use('/signupProvider', signupProvider);


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
  console.log(`Example app listening at http://localhost:${port}`);
});