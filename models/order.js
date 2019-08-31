const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({

    orderDate: {
        type: Date,
        required: true
    },
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    shipmentDate: {
        type: Date,
        required: true
    },
    orderItems: [{
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        unitPrice: {
            type: Number,
            required: true
        },
        discount: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    }],
    finalTotal: {
        type: Number,
        required: true
    },
    organisationId: {
        type: Schema.Types.ObjectId,
        ref: 'Organisation'
    }
})


const Order = mongoose.model('Order', orderSchema)
module.exports = Order