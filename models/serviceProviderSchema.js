
//module.export = ServiceProvider;


const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");
//mongoose.connect("mongodb+srv://raghad:98765ragahd@cluster0.9jk40dj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
   // useNewUrlParser: true,
    //useUnifiedTopology: true,
//}).then(() => {
  //  console.log("MongoDB connected");
//}).catch((error) => {
    //console.error("MongoDB connection error:", error);
//});

const serviceProviderSchema= new mongoose.Schema( {
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





