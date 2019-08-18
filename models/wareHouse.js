//This model will be used for stock maintenance 

//This model is used to capture the 
const mongoose = require('mongoose')
const Schema = mongoose.Schema()


const warehouseSchema = new Schema ({
    productid:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    latestStock: {
        type: Number,
        required: true
    },
    committedStock: {
        type: Number,
        required: true   
    },
    unitPrice: {
        type: Number,
        required: true 
    },
    buyPrice: {
        type: Number,
        required: true 
    },
    wholesalePrice: {
        type: Number,
        required: true 
    },
    retailPrice: {
        type: Number,
        required: true 
    }
    
})


const WareHouse = mongoose.model('WareHouse', warehouseSchema) 

module.exports =  WareHouse