const mongoose = require('mongoose')
const Schema = mongoose.Schema


const pricingSchema = new Schema({

    groupName: {
        type: String,
        required: true,
        unique: true
    },
    action: {
        type: Number, //Discount % will be mentioned here 
        required: true,
        unique: true
    },
    organisationId: {
        type: Schema.Types.ObjectId,
        ref: 'Organisation'
    }
})

const Pricing = mongoose.model('Pricing', pricingSchema)

module.exports = Pricing