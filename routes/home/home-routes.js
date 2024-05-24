const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const home=require('../../controllers/userController')
router.get("/", home.HomePage )


module.exports = router; 
//https://youtube.com/watch?v=0Hu27PoloYw&si=N4cHQN3x1Bl2W0Lz