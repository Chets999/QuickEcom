const Category = require('../models/category_master')
const Brand = require('../models/brand_master')



module.exports.list = (req, res) => {

    Brand.find({ organisationId: req.user.organisationId })
        .then(Brand => res.json(Brand))
        .catch(err => res.json(err))
}


module.exports.show = (req, res) => {
    const id = req.params.id
    Brand.findById({ _id: id, organisationId: req.user.organisationId })
        .then(category => {
            res.json(category)
        })
        .catch(err => {
            res.json(err)
        })
}


module.exports.create = (req, res) => {

    const data = req.body
    const brand = new Brand(data)
    brand.organisationId = req.user.organisationId

    brand.save()
        .then(brand => {
            res.json(brand)
        })
        .catch(err => {
            res.json(err)
        })
}