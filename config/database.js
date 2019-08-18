const mongoose = require('mongoose')

//DB Config 

mongoose.Promise = global.Promise // we are telling mongoose to use Promise of teh global/window object
//Promise is an object used for performing Asynchrnous activities 

    mongoose.connect('mongodb://localhost:27017/QuickEcom',{
        useNewUrlParser: true
    })
    .then(() => {
        console.log('connected to db')
    })
    .catch(() => {
        console.log('Error connecting to DB', err)        
    })

    

module.exports = mongoose 