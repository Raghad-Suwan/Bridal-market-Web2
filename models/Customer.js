const mongoose = require("mongoose");  
const Schema = mongoose.Schema;

const searchSchema= new Schema({  
    brand: String,  
    catagory: String,
    price: Number,
    //searchTerm:  String, هاي لازم تنضاف عشان السيرتش نوخد اللي جواتو ونبحث بالسكيما 
  })  

  const Customer =mongoose.model("Customer",searchSchema)  

  module.exports = Customer;