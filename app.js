
const express = require('express');
const app = express();
const port = 5000; 
const path  = require('path');

app.set('view engine', 'ejs');

// mongodb connect
const mongoose = require("mongoose"); 
mongoose.connect("") 
 
const UserSchema= new mongoose.Schema({ 
  name: String, 
  age: Number 
}) 
 
const UserModel =mongoose.model("users",UserSchema) 
 
app.get("/getUsers",(req, res) =>{ 
 
  UserModel.find({}).then(function(users){ 
    res.json(users) 
  }).catch(function(err){ 
    console.log(err) 
  }) 
})



const publicDir = path.join(__dirname ,'./public');
const dashbordRoutes = require('./routes/dashbord/dashbord_routes')
const events =require('./routes/event/event-routes')
const profiles =require("./routes/profiles/profiles_routes");
const home = require('./routes/home/home-routes')
const loading = require('./routes/sign/loadingpage')
const productpage = require('./routes/productPage/product-route')

const signupUser = require('./routes/sign/sign-routes')
const signupProvider = require('./routes/sign/sign-routes');


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
  console.log(`Example app listening at http://localhost:${port}`);
});


