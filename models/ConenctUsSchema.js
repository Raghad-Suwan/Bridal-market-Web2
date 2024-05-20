
// Create schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conenctUsSchema = new Schema({
    name: String,
    email: String,
    phonenumber: String,
    message: String,
});


// Create model and export it 

module.exports = mongoose.model("contact data", conenctUsSchema);