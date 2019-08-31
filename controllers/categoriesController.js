const Category = require('../models/category_master')
const Brand = require('../models/brand_master')



module.exports.list = (req, res) => {

    Category.find({ organisationId: req.user.organisationId })
        .then(users => res.json(users))
        .catch(err => res.json(err))
}


module.exports.show = (req, res) => {
    const id = req.params.id
    Category.findById({ _id: id, organisationId: req.user.organisationId })
        .then(category => {
            res.json(category)
        })
        .catch(err => {
            res.json(err)
        })
}


module.exports.create = (req, res) => {

    const data = req.body
    const category = new Category(data)
    category.organisationId = req.user.organisationId
    category.save()
        .then(categories => {
            res.json(categories)
        })
        .catch(err => {
            res.json(err)
        })
}


module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Category.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })
        .then(category => {
            res.json(category)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Category.findByIdAndDelete({ _id: id })
        .then(category =>
            res.send(category))
        .catch(err => {
            res.json(err)
        })

}
