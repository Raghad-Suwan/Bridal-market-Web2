const { render } = require('ejs');//signup-ruotse
const express = require('express');
const router = express.Router();

const signuppost = require('../../controllers/appControllersSp')

const signupget = require('../../controllers/appControllersSp')


router.get("/signup", signupget.signin_get)
router.post("/signup",signuppost.signin_post)



    
module.exports = router; 
