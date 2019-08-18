const mongoose = require('mongoose')
const Schema = mongoose.Schema

const invoiceSchema = new Schema({
    orderid:{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    },
    customerName:{
        type: Date,
        required: true
    },
    isPaid:{
        type:Boolean,
        required:true
    },
    paymentDue: {
        type: Date,
    },
    lastUpdate:{
                 type: Date,
                required: true
    },    
    comment:{
        type:String
    },
    total:{
        type: Number,
        required: true
    }
})
const Invoice = mongoose.model('Invoice', invoiceSchema)
module.exports = Invoice