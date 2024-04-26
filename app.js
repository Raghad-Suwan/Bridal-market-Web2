const express = require('express');
const app = express();
const port = 5000; 
const dashbordRoutes = require('./routes/dashbord/dashbord_routes')
const path  = require('path');

app.set('view engine', 'ejs');

const publicDir = path.join(__dirname ,'./public');
app.use(express.static(publicDir));
app.use('/dashbord', dashbordRoutes );

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
