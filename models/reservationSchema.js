// Create schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    location: String,
});


// Create model and export it 
module.exports = mongoose.model("reservation data", reservationSchema);