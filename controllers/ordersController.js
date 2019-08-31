const Order = require('../models/order')
const WareHouse = require('../models/wareHouse')



module.exports.list = (req, res) => {

    Order.find({ organisationId: req.user.organisationId })
        .then(order => res.json(order))
        .catch(err => res.json(err))
}


module.exports.show = (req, res) => {
    const id = req.params.id
    Order.findById({ _id: id, organisationId: req.user.organisationId })
        .then(order => {
            res.json(order)
        })
        .catch(err => {
            res.json(err)
        })
}


module.exports.create = (req, res) => {

    const data = req.body
    const order = new Order({ orderDate: data.orderDate, customerId: data.customerId, shipmentDate: data.shipmentDate, orderItems: [...data.orderItems], finalTotal: data.finalTotal })
    order.organisationId = req.user.organisationId
    order.save()
        .then(order => {
            res.json(order)
            /*  WareHouse.update({ productId: order.orderItems[0].productId }, { $set: { quantity: Number - Number(order.orderItems[0].quantity) } })
                 .then(wareHouse => {
                     res.json(wareHouse)
                 } */

        })
        .catch(err => {
            res.json(err)
        })
}


module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Order.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })
        .then(order => {
            res.json(order)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Order.findByIdAndDelete({ _id: id })
        .then(order =>
            res.send(order))
        .catch(err => {
            res.json(err)
        })

}
