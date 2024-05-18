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

 

//dynamic product 
app.get('/eventproduct', (req, res) => {
  const products = [
      { id: 1, title: 'Piece Jigsaw Puzzle', brand: 'Ravensburger', price: 19.99, category:"dress" ,src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png'} ,
      { id: 2, title: 'Etch A Sketch', brand: 'Ohio Art', price: 21.99, category:"camera",src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
      { id: 3, title: 'Piece Jigsaw Puzzle', brand: 'Raveasdnsburger', price: 19.99,category:"cake" ,src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
      { id: 4, title: 'Piece Jigsaw Puzzle', brand: 'Ravensburger', price: 19.99, category:"plapla" , src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
      { id: 5, title: 'Piece Jigsaw Puzzle', brand: 'Ravensburger', price: 19.99, category:"plapla" , src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
      { id: 6, title: 'Piece Jigsaw Puzzle', brand: 'Ravensburger', price: 19.99, category:"plapla" , src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
      { id: 7, title: 'Piece Jigsaw Puzzle', brand: 'Ravensburger', price: 19.99, category:"plapla" , src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
      { id: 8, title: 'Piece Jigsaw Puzzle', brand: 'Ravensburger', price: 19.99, category:"plapla" , src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
      { id: 9, title: 'Piece Jigsaw Puzzle', brand: 'Ravensburger', price: 19.99, category:"plapla" , src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
  ];
res.render('index', { products: products });
app.get('/productpage/:categoryName', (req, res) => {
  const categoryName = req.params.categoryName;
  const filteredProducts = products.filter(p => p.category === categoryName);
  res.render('/productpage/productpage', { products: filteredProducts });
});
});

//To go to the desired image





app.listen(port, () => {
  console.log("App Running on http://localhost:5000");
});

