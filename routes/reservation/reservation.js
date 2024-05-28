const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const reservationConf = require('../../controllers/userController')


router.get("/reservationConf", reservationConf.reservationConf)

router.post('/reservationConf', reservationConf.reservationSupmit);

    
module.exports = router; 