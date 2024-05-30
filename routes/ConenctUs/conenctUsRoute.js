//Route of conenctUsControler
const express = require('express');
const router = express.Router();

const ConenctUsController = require('../../controllers/conenctUsControler');

//Route of Conenct Us
router.post("/conenct", ConenctUsController.postConenctUs);


//Exports router in app.js
module.exports = router;


