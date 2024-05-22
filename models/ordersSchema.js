const mongoose = require("mongoose");  

const UserSchema= new mongoose.Schema({  
  number: Number,
  name: String,
  emailAddress: String,
  phone: Number,
  image: String,
  date: String,
  locaton: String
  })  

  const UserModel =mongoose.model("dashbordorders",UserSchema)  

  module.exports = UserModel;