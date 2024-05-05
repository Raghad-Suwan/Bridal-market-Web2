
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


const product = {
  title: 'Sample Product',
  price: 80,
  description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  image: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png',
  images: [
    'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png',
    'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png',
    'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png',
  ]
};
const similarProducts = [
  { title: 'Similar Product 1', brand: 'Brand A', price: 20, image: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
  { title: 'Similar Product 2', brand: 'Brand B', price: 30, image: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
  { title: 'Similar Product 3', brand: 'Brand C', price: 25, image: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
  { title: 'Similar Product 4', brand: 'Brand D', price: 52, image: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' }
];
app.get('/', (req, res) => {
  res.render('ProductPage', { product, similarProducts });
});





// app.get('/home', (req, res) => {
//   res.render('home');
// });



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


