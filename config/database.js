const mongoose = require('mongoose')

//DB Config 

mongoose.Promise = global.Promise // we are telling mongoose to use Promise of teh global/window object
//Promise is an object used for performing Asynchrnous activities 
//mongodb+srv://k23raj:<password>@cloudclusterdb-y9tqw.mongodb.net/test?retryWrites=true&w=majority

//.MONGOLAB_URI 
mongoose.connect('mongodb+srv://raj:raj123@cloudclusterdb-y9tqw.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
    .then(() => {
        console.log('connected to db')
    })
    .catch(() => {
        console.log('Error connecting to DB', err)
    })



module.exports = mongoose 