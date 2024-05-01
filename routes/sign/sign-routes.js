const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const signupuser = require('../../controllers/userController')
const signupprovider = require('../../controllers/userController')


router.get("/signup", signupuser.SignupUserPage)
router.get("/signupProvider", signupprovider.signupprovider)



    
module.exports = router; 