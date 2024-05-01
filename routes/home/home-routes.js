const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const homepage = require('../../controllers/userController')

router.get("/home", homepage.HomePage )
    
module.exports = router; 