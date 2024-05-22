const mongoose = require('mongoose');

// Define schema and model for Information
  const userSchema = new mongoose.Schema({
    no: Number,
    image: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },

}, { timestamps: true }); // add createdAt timestamp to schema
  module.exports = mongoose.model('User',userSchema)