const mongoose = require('mongoose')
const Schema = mongoose.Schema

const organisationSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    gst: {
        type: String,
        required: true,
        unique: true
    }
})
const Organisation = mongoose.model('Organisation', organisationSchema )

module.exports = Organisation