const { render } = require('ejs');//signup-ruotse
const express = require('express');
const router = express.Router();

const signuppost = require('../../controllers/appControllerSP')

const signupget = require('../../controllers/appControllerSP')


router.get("/signupProvider", signupget.signin_get)
router.post("/signupProvider",signuppost.signin_post)



    
module.exports = router; 
//https://youtube.com/watch?v=0Hu27PoloYw&si=N4cHQN3x1Bl2W0Lz