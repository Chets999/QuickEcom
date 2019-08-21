const Category = require('../models/category_master')
const Brands = require('../models/brand_master')



module.exports.list = (req, res) => {

    Category.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
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


