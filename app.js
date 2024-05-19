
const express = require('express');
const app = express();
const port = 5000; 
const path  = require('path');

app.set('view engine', 'ejs');


const publicDir = path.join(__dirname ,'./public');
const dashbordRoutes = require('./routes/dashbord/dashbord_routes')
const events =require('./routes/event/event-routes')
const profiles =require("./routes/profiles/profiles_routes");
const home = require('./routes/home/home-routes')
const loading = require('./routes/sign/loadingpage')
const productpage = require('./routes/productPage/product-route')

const signupUser = require('./routes/sign/sign-routes')
const signupProvider = require('./routes/sign/sign-routes')


app.use(express.static(publicDir));

app.use('/dashbord', dashbordRoutes );
app.use('/index', events);
app.use('/profiles', profiles );
app.use('/loading',loading);
app.use('/productpage',productpage);
app.use('/signup',signupUser);
app.use('/home', home); 
app.use('/signupProvider',signupProvider);



//Maindashboard routes
const Provider = require('./routes/maindashboard/models/allproviders'); 
const User = require('./routes/maindashboard/models/allusers');

//home route for Maindashboard
app.get('/', (req, res) => {
  res.render('maindashboard')});
  app.get('/allserviceproviders', async (req, res) => {
    const providers = await Provider.find({});
    res.render('allserviceproviders', { providers, message: null });
  });
  app.get('/allusers', async (req, res) => {
    const users = await User.find({});
    res.render('allusers', { users, message: null });
  });
  const ActivationRoutes = require('./routes/maindashboard/activationroute');
  const deleteProviderRoutes = require('./routes/maindashboard/deleteproviderroute');
  const deleteUserRoutes = require('./routes/maindashboard/deleteuserroute');
  app.use('/updateActivation', ActivationRoutes);
  app.use('/deleteProvider', deleteProviderRoutes);
  app.use('/deleteUser',deleteUserRoutes);





// product page 
 const Product=require('./models/product');
  const similarproduct=require('./models/similarproduct');
  
  app.get('/', async (req, res) => {
    const products = await Product.find({}); // Fetch all products
    const similarProducts = await similarproduct .find({});
    res.render('ProductPage', { products, similarProducts });
  });
app.get('/', (req, res) => {
  res.render('ProductPage', { product, similarProducts });
});





// app.get('/home', (req, res) => {
//   res.render('home');
// });



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


