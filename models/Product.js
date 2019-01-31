const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    slot: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        minlength: 16
    },
    period: Number,
    returnValue: Number,
    sharePeriod: Number,
    picture: String,
    province: String,
    regional: String,
    subdistrict: String,
    countView: Number,
    date: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('products', ProductSchema);