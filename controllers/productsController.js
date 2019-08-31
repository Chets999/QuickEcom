const Product = require('../models/product_master')
const WareHouse = require('../models/wareHouse')



module.exports.list = (req, res) => {

    Product.find({ organisationId: req.user.organisationId })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}


module.exports.show = (req, res) => {
    const id = req.params.id
    Product.findById({ _id: id, organisationId: req.user.organisationId }).populate("brandId").populate("categoryId").populate("organisationId")
        .then(product => {
            res.json(product)
        })
        .catch(err => {
            res.json(err)
        })
}


module.exports.create = (req, res) => {
    console.log("create")
    const data = req.body
    const product = new Product(data)
    product.organisationId = req.user.organisationId
    product.save()
        .then(product => {
            console.log(product)
            // const committedStock = data.committedStock ? (data.committedStock) : (0)
            const wareHouse = new WareHouse({ productId: product._id, latestStock: data.initalStock, committedStock: data.committedStock, unitPrice: data.unitPrice, buyPrice: data.buyPrice, wholesalePrice: data.wholesalePrice, retailPrice: data.retailPrice })
            wareHouse.save()
                .then(wareHouse => {
                    res.json({ product, wareHouse })
                })
                .catch(err => {
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
    Product.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })
        .then(product => {
            res.json(product)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Product.findByIdAndDelete({ _id: id })
        .then(product =>
            res.send(product))
        .catch(err => {
            res.json(err)
        })

}
