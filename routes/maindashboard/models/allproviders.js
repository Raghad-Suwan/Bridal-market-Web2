const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
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
    activation:{
type:Boolean,
default: false,
    }
        }, {timestamps:true}) // add createdAt timestamp to schema
  
  module.exports= mongoose.model('Provider', providerSchema);