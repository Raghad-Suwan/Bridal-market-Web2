const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const LoadingPage = require('../../controllers/userController')


router.get("/loading", LoadingPage.LoadingPage)

    
 
module.exports = router; 


