const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const isAuth=require('../../middleware/is-auth')
const homepage = require('../../controllers/appControllers')

router.get("/", isAuth,homepage.homes_get)
    
module.exports = router; 
//https://youtube.com/watch?v=0Hu27PoloYw&si=N4cHQN3x1Bl2W0Lz