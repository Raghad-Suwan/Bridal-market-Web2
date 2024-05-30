const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const loginget =  require('../../controllers/appControllersSp')

const loginpost =  require('../../controllers/appControllersSp')


router.get("/Login", loginget.login_get); 
router.post("/Login", loginpost.login_post)

module.exports = router; 
