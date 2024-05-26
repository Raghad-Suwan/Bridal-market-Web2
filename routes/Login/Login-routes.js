const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const loginget =  require('../../controllers/appControllers')

const loginpost =  require('../../controllers/appControllers')


router.get("/Login", loginget.login_get); // GET request for login page
router.post("/Login", loginpost.login_post)

module.exports = router; 
//https://youtube.com/watch?v=0Hu27PoloYw&si=N4cHQN3x1Bl2W0Lz