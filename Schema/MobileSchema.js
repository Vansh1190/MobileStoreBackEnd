const mongoose = require('mongoose');

const {Schema} = mongoose 

const MobileSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    } ,
    type: {
        type: String,
        required: true,
    },
    processor: {
            type: String,
        required: true
    },
    memory: {
        type: String,
        required: true
    } ,
    OS:{ 
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    } ,
    weight : {
        type: Number,
        required: true
    } ,
    storage : {
        type: Number,
        required: true
    } ,
    imgURL: {
        type: String,
        required : true,
        default: 'NA'
    }

})

module.exports = mongoose.model('Mobiles', MobileSchema)