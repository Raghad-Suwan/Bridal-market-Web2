const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productscema = new Schema({
id:Number,
title:String,
city:String,
price:Number,
title:String,
src:String,
category:String,
descreption:String,
size :String,
created: {
    type: Date,
    required: true,
    default: Date.now,
},

})

const Provider = mongoose.model('users', productscema)






module.exports = Provider
