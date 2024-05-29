// Create schema
const mongoose = require("mongoose");

const cal1Schema = new mongoose.Schema({
  dateReservation: Date, 
  timeReservation: String
});

// Create model and export it 
module.exports = mongoose.model('Bookingcal1', cal1Schema);
