//This model is used to capture the 
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true,
        unique: true
    },
    categoryId: {

        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },

    brandId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Brand'
    },
    description: {
        type: String,
        required: true,

    },
    color: {
        type: String,
        required: true,
    },
    organisationId: {
        type: Schema.Types.ObjectId,
        ref: 'Organisation'
    }

})


const Product = mongoose.model('Product', productSchema)

module.exports = Product