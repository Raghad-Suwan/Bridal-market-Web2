const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const calender = require('../../controllers/userController')

router.get("/calender1", calender.calender1 )

router.get("/calender2", calender.calender2 )

    
module.exports = router; 