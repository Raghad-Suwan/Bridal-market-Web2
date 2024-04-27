
const express = require('express');
const app = express();
const path=require('path');
const port = 5000; 


app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname,'public')));
 app.use(express.urlencoded({extended:false}));
 app.get("/signin", (req, res) => {

  res.render("signin.ejs");
});
app.get("/signup", (req, res) => {
  
  res.render("signup.ejs");
});

app.get('/', (req, res) => {
  res.render('home');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
