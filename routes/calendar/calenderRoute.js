//Route of calendarController
const express = require('express');
const router = express.Router();

const calendarController = require('../../controllers/calendarController');

//Route of cal1 
router.post('/cal1/reservationConf', calendarController.postCal1Res);
router.get("/cal1", calendarController.cal1);

//Route of cal2 
router.post('/cal2/reservationConf', calendarController.postCal2Res);
router.get("/cal2", calendarController.cal2);


//Exports router in app.js
module.exports = router;


