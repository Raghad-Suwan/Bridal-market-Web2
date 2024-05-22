const mongoose = require('mongoose');

// Define schema and model for Information
  const similarproductSchema = new mongoose.Schema({
    title: {type:String,   
          required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
}, { timestamps: true }); // add createdAt timestamp to schema
  module.exports = mongoose.model('similarproduct',similarproductSchema)