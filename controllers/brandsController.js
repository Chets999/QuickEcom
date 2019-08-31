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
        .then(brand => {
            res.json(brand)
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
            console.log(data.categories)
            Category.updateMany({
                _id: { $in: [...data.categories] }
            }, { $addToSet: { 'brands': brand._id } }, { new: true, runValidators: true })
                .then(category => {
                    console.log(brand)
                    res.json(category)
                })
                .catch(err => {
                    console.log(brand)
                    res.json(err)
                })

        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Brand.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })
        .then(brand => {
            res.json(brand)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Brand.findByIdAndDelete({ _id: id })
        .then(brand =>
            res.send(brand))
        .catch(err => {
            res.json(err)
        })

}
