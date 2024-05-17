const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const isAuth=require('../../middleware/is-auth')
const homepage = require('../../controllers/appControllers')

router.get("/home", isAuth,homepage.homes_get )
    
module.exports = router; 