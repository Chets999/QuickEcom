const Organisation = require('../models/organisation')

module.exports.list = (req, res) => {
    Organisation.find()
        .then(organisations => res.json(organisations))
        .catch(err => res.json(err))
}


module.exports.create = (req, res) => {
    const data = req.body
    const organisation = new Organisation(data)
    organisation.save()
        .then(organisation => res.json(organisation))
        .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Organisation.findById(id)
        .then(organisation => {
            res.json(organisation)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroyAll = (req, res) => {
    Organisation.deleteMany()
        .then(organisations =>
            res.send('all deleted successfully '))
}