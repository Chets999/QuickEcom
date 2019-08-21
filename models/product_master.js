//This model is used to capture the 
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    modelnumber: {
        type: String,
        required: true,
        unique: true

    },
    categoryId: {

        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },

    brandid: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Brand'
    },
    productdescription: {
        type: String,
        required: true,
        unique: true
    },
    Color: {
        type: String,
        required: true,
        unique: true
    }

})


const Product = mongoose.model('Product', productSchema)

module.exports = Product