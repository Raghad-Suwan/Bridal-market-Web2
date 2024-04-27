
const express = require('express');
const app = express();
const port = 5000; 
const dashbordRoutes = require('./routes/dashbord/dashbord_routes')
const path  = require('path');

app.set('view engine', 'ejs');



const publicDir = path.join(__dirname ,'./public');

const events =require('./routes/event-routes')
const profiles =require("./routes/profiles/profiles_routes");
const home = require('./routes/home/home-routes')
const loading = require('./routes/sign/loadingpage')
const productpage = require('./routes/productPage/product-route')


app.use(express.static(publicDir));

app.use('/dashbord', dashbordRoutes );
app.use("/events", events);
app.use('/profiles', profiles );
app.use('/loading',loading);
app.use('/productpage',productpage);



// app.get('/home', (req, res) => {
//   res.render('home');
// });

app.use('/home', home); 


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


