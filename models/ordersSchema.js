// const mongoose = require("mongoose");  

// const UserSchema= new mongoose.Schema({  
//   number: Number,

  
//   product: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'users',
//     required: true
// },


//   date: String


//   ,reservation: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Reservation',
//     required: true
//   }]
 
//   })  

//   const UserModel =mongoose.model("dashbordorders",UserSchema)  

//   module.exports = UserModel;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    title: String,
    
    price: String,
    image: String,
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },

    date: { type: Date, default: Date.now },
    username: String,
    email: String,
    phone: String,
    location: String
});

module.exports = mongoose.model('Order', orderSchema);
