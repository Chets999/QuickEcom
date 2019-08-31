const mongoose = require('mongoose')
const Schema = mongoose.Schema


const vendorSchema = new Schema({

    companyName: {
        type: String,
        required: true,
        unique: true
    },

    companyEmail: {
        type: String,
        required: true,
        unique: true
    },

    companyContact: {
        type: String,
        required: true,
        unique: true
    }
})

const Vendor = mongoose.model('Vendor', vendorSchema)

module.exports = Vendor