const mongoose = require("mongoose");  

const UserSchema= new mongoose.Schema({  
  number: Number,

  
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
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