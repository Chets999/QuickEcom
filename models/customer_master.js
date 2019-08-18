const mongoose = require('mongoose')
const Schema = mongoose.Schema()


const customerSchema = new Schema ({

    companyName: {
                        type: String,
                        required: true,
                        unique: true
    },
    type:{
                        type: String,  //Online or Offline or Wholesalers
                        required: true
    },     
    companyEmail:{ 
                        type: String,
                        required: true,
                        unique: true
    },
    companyContact: { 
                        type: String,
                        required: true,
                        unique: true
    },
    shippingAddress : {
                        type: String,
                        required: true,
                        unique: true
    },
    pricingGroupId: {
        type: Schema.Types.ObjectId,
        ref: 'Pricing'       
        }


})

const Customer = mongoose.model('Customer',customerSchema)

module.exports = Customer