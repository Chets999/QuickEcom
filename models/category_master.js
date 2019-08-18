const mongoose = require('mongoose')
const Schema = mongoose.Schema()


const categorySchema = new Schema ({

    name:{
        type: String,
        required: true,
        unique: true
    },
    brands: [
         {
            type: Schema.Types.ObjectId,
            ref: 'Brand'
        }
    ],
    pricingID:{
        type: Schema.Types.ObjectId,
        ref: 'Pricing'
    }


})

const Category = mongoose.model('Category',categorySchema)

module.exports = Category