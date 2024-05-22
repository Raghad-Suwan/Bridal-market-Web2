//express and path 
const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

const mongoose = require("mongoose");



app.set('view engine', 'ejs');

// Static files
const publicDir = path.join(__dirname, './public');
app.use(express.static(publicDir));

// Middleware to parse the body of POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routs
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
const productpage = require('./routes/productPage/product-route');
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
app.use('/searchPage', productpage)


//dynamic product 
app.get('/eventproduct', (req, res) => {
  const products = [
    { id: 1, title: 'Piece Jigsaw Puzzle', brand: 'Ravensburger', price: 19.99, src: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' },
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

//mongo connect
mongoose.connect("mongodb://localhost:27017/test1")
  .then(() => {

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
      console.log('success connection with database');
      
    });
  })
  .catch((err) => {
    console.log(err);
  })


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


