const Customer = require('../models/customer_master')




module.exports.list = (req, res) => {

    Customer.find({ organisationId: req.user.organisationId })
        .then(customer => res.json(customer))
        .catch(err => res.json(err))
}


module.exports.show = (req, res) => {
    const id = req.params.id
    Customer.findById({ _id: id, organisationId: req.user.organisationId })
        .then(customer => {
            res.json(customer)
        })
        .catch(err => {
            res.json(err)
        })
}


module.exports.create = (req, res) => {

    const data = req.body
    const customer = new Customer(data)
    customer.organisationId = req.user.organisationId
    customer.save()
        .then(customer => {
            res.json(customer)
        })
        .catch(err => {
            res.json(err)
        })
}


module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Customer.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })
        .then(customer => {
            res.json(customer)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Customer.findByIdAndDelete({ _id: id })
        .then(customer =>
            res.send(customer))
        .catch(err => {
            res.json(err)
        })

}
