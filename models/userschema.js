const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productscema = new Schema({
id:Number,
title:String,
city:String,
price:Number,
src:String,
category:String,
descreption:String,
size :String,
created: {
    type: Date,
    required: true,
    default: Date.now,
},

provider_id: String


})

const Provider = mongoose.model('users', productscema)






module.exports = Provider
