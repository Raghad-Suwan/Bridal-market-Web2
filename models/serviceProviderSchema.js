
//module.export = ServiceProvider;


const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");
const serviceProviderSchema= new mongoose.Schema({
    name:String,
    companyName: String,
    emailAddress:String,
    location:String,
    phone:Number,
    password: mongoose.Schema.Types.Mixed,
    repeatPassword: mongoose.Schema.Types.Mixed,
   
   });
   
 

const collectionn = mongoose.model("serverProvider",serviceProviderSchema );


module.exports = collectionn;
//https://youtube.com/watch?v=O5kh3sTVSvA&si=ZaMgs0eLCXazucZh





