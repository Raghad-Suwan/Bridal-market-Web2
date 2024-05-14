const mongoose = require("mongoose");  

const UserSchema= new mongoose.Schema({  
    name: String,  
    emailAddress: String,
    phone: Number,
    password : String
  })  

  const UserModel =mongoose.model("pruducts",UserSchema)  

  module.exports = UserModel;