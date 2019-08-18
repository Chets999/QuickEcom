const Organisation = require('../models/organisation')

module.exports.list = (req, res) => {
    Organisation.find()
        .then(organisations => res.json(organisations))
        .catch(err => res.json(err))       
}

module.exports.delete = (req,res) => {
    Organisation.deleteMany()
    .then(organisations =>
        res.send('all deleted successfully '))
}