const mongoose = require('mongoose');

const {Schema} = mongoose 

const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true,
    } ,
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    } ,
    zipCode:{ 
        type: String,
        required: true
    },
    state : {
        type: String,
        required: true
    } ,
    country: {
        type: String,
        required : true,
    },
    buyItem: {
        type:Array,
        required: true
    }

})

module.exports = mongoose.model('OrderRecords', CustomerSchema)