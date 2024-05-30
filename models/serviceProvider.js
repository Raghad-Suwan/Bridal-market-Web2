const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");


const serviceProviderSchema = new mongoose.Schema({

    name: String,
    companyName:String,
    location:String,
    emailAddress: String,
    phone: Number,
  
    password: mongoose.Schema.Types.Mixed,
    repeatPassword: mongoose.Schema.Types.Mixed
});
 

const collectionn = mongoose.model("signupProviderinfo", serviceProviderSchema);


module.exports = collectionn;


