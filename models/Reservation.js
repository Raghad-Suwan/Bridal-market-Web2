const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ReservationSchema = new Schema({
    Name: {

        type: String, required: true

    },
    Email: {
        type: String, required: true
    },

    Location: {

        type: String, required: true
    },

    productId: { type :String ,required:true} ,
    Phone: { type: Number, required: true },
    dateReservation:Date ,
    
    timeReservation:   String 

})

const UserReservation = mongoose.model("Reservation", ReservationSchema)

module.exports = UserReservation;