const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const calender = require('../../controllers/userController')

router.get("/calender1", calender.calender1 )

router.get("/calender2", calender.calender2 )

router.get("/reservationConf", calender.reservationConf)

module.exports = router; 