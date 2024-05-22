
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({


    name: {
        type: String,
        require: true

    },

    price: {
        type: String,
        require: true
    },

    size: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    },


    service: {
        type: String,
        require: true
    },

    city: {
        type: String,
        require: true
    },

    img: {
        type: String,
         require: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now,
    },

    // provider_id: {
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'provider',  
    //     required: true
    // }

});

module.exports = mongoose.model("productschema", ProductSchema);
