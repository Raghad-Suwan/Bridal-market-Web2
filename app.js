
const express = require('express');
const app = express();
const port = 5000; 
const path  = require('path');

app.set('view engine', 'ejs');


//routs
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
app.use('/eventproduct', events);
app.use('/profiles', profiles );
app.use('/loading',loading);
app.use('/productpage',productpage);
app.use('/signup',signupUser);
app.use('/', home); 
app.use('/signupProvider',signupProvider);

 

//dynamic product 
app.get('/eventproduct', (req, res) => {
  const products = [
      { id: 1, title: 'Piece Jigsaw Puzzle', brand: 'Ravensburger', price: 19.99, src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png'},
      { id: 2, title: 'Etch A Sketch', brand: 'Ohio Art', price: 21.99, src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
      { id: 3, title: 'Piece Jigsaw Puzzle', brand: 'Raveasdnsburger', price: 19.99, src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
      { id: 4, title: 'Piece Jigsaw Puzzle', brand: 'Ravensburger', price: 19.99, src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
      { id: 5, title: 'Piece Jigsaw Puzzle', brand: 'Ravensburger', price: 19.99, src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
      { id: 6, title: 'Piece Jigsaw Puzzle', brand: 'Ravensburger', price: 19.99, src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
      { id: 7, title: 'Piece Jigsaw Puzzle', brand: 'Ravensburger', price: 19.99, src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
      { id: 8, title: 'Piece Jigsaw Puzzle', brand: 'Ravensburger', price: 19.99, src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
      { id: 9, title: 'Piece Jigsaw Puzzle', brand: 'Ravensburger', price: 19.99, src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
  ];
res.render('index', { products: products });
});

//To go to the desired image


//mongo 

const mongoose = require("mongoose");  
app.use(express.urlencoded({ extended: true}));
const UserModel=require("./models/dressesSchema")

mongoose.connect("mongodb://localhost:27017/test1").then(() =>{ 
 
app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`); 
  console.log('success connection with database'); 
}); 
})
.catch((err) =>{ 
  console.log(err); 
}) 

    
app.get("/getUsers",(req, res) =>{  
  
  UserModel.find({})

  .then(function(pruducts){  
    res.json(pruducts)  
  })
  .catch(function(err){  
    console.log(err)  
  })  
})

app.post("/signup/signup",(req, res) =>{ 
 console.log( req.body)
 res.redirect("/")
 })
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });


