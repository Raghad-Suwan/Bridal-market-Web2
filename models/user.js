const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");
/*
mongoose.connect("mongodb+srv://raghad:98765ragahd@cluster0.9jk40dj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
});
*/

const loginSchema = new mongoose.Schema({

    name: String,
    emailAddress: String,
    phone: Number,
  
    password: mongoose.Schema.Types.Mixed,//https://mongoosejs.com/docs/2.7.x/docs/schematypes.html
    repeatPassword: mongoose.Schema.Types.Mixed
});
 

const collection = mongoose.model("set", loginSchema);


module.exports = collection;
//https://youtube.com/watch?v=O5kh3sTVSvA&si=ZaMgs0eLCXazucZh

