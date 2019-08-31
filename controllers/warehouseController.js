const Vendor = require('../models/vendor_master')




module.exports.list = (req, res) => {

    Vendor.find({ organisationId: req.user.organisationId })
        .then(vendor => res.json(vendor))
        .catch(err => res.json(err))
}


module.exports.show = (req, res) => {
    const id = req.params.id
    Vendor.findById({ _id: id, organisationId: req.user.organisationId })
        .then(vendor => {
            res.json(vendor)
        })
        .catch(err => {
            res.json(err)
        })
}


module.exports.create = (req, res) => {

    const data = req.body
    const vendor = new Vendor(data)
    vendor.organisationId = req.user.organisationId
    vendor.save()
        .then(vendor => {
            res.json(vendor)
        })
        .catch(err => {
            res.json(err)
        })
}


module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Vendor.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })
        .then(vendor => {
            res.json(vendor)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Vendor.findByIdAndDelete({ _id: id })
        .then(vendor =>
            res.send(vendor))
        .catch(err => {
            res.json(err)
        })

}
