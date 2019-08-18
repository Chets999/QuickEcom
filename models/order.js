const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    
    orderDate: {
                type: Date,
                required: true
    },
    shipmentDate:{
                type: Date,
                required: true
    },
    orderedItems: [{ 
                    lineproductID:{
                        type: Schema.Types.ObjectId,
                        ref: 'Product' 
                                    },
                    lineQuantity:{
                                type:Number,
                                required: true
                    },
                    linePrice:{
                        type:Number,
                        required: true
                    },
                    lineDiscount:{
                                    type:Number,
                                    required: true
                    },
                    lineTotal:{
                                    type:Number,
                                    required: true
                    }
    }],
    finalTotal:{
                type: Number,
                required: true
    }
})


const Order = mongoose.model('Order', orderSchema)
module.exports = Order