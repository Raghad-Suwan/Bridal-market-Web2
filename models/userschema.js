const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define the schema
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

})

//create a model based in the schema
const Provider = mongoose.model('users', productscema)




//export the model  
module.exports = Provider
