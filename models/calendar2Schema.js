// Create schema
const mongoose = require("mongoose");

const cal2Schema = new mongoose.Schema({
  dateReservation: Date,
  startTime: String,
  endTime : String
});

// Create model and export it 
module.exports = mongoose.model('Bookingcal2', cal2Schema);
