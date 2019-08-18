const mongoose = require('mongoose')
const Schema = mongoose.Schema()


const pricingSchema = new Schema ({

    groupName: {
        type: String,
        required: true,
        unique: true        
    },
    
    action:{
        type: String, //Discount % will be mentioned here 
        required: true,
        unique: true}
})

const Pricing = mongoose.model('Pricing',pricingSchema)

module.exports = Pricing