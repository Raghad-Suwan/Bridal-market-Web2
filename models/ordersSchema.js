const mongoose = require("mongoose");  

const UserSchema= new mongoose.Schema({  
  number: Number,
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'productschema',
    required: true
},
  date: String
  ,reservation: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reservation',
    required: true
  }]
 
  })  

  const UserModel =mongoose.model("dashbordorders",UserSchema)  

  module.exports = UserModel;