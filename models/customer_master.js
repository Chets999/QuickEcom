const mongoose = require('mongoose')
const Schema = mongoose.Schema


const customerSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,  //Online or Offline or Wholesalers
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true,
        unique: true
    },
    shippingAddress: {
        type: String,
        required: true,
        unique: true
    },
    pricingGroupId: {
        type: Schema.Types.ObjectId,
        ref: 'Pricing'
    },
    organisationId: {
        type: Schema.Types.ObjectId,
        ref: 'Organisation'
    }


})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer