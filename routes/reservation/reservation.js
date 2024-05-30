const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const reservationConf = require('../../controllers/reservationControllers')


router.get("/reservationConf", reservationConf.reservationConf)

router.post('/', reservationConf.re);
// router.post('/reserve', reservationConf.reservationSupmit);

    
module.exports = router; 