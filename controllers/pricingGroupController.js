const PricingGroup = require('../models/pricing_master')




module.exports.list = (req, res) => {

    PricingGroup.find({ organisationId: req.user.organisationId })
        .then(pricingGroup => res.json(pricingGroup))
        .catch(err => res.json(err))
}


module.exports.show = (req, res) => {
    const id = req.params.id
    PricingGroup.findById({ _id: id, organisationId: req.user.organisationId })
        .then(pricingGroup => {
            res.json(pricingGroup)
        })
        .catch(err => {
            res.json(err)
        })
}


module.exports.create = (req, res) => {

    const data = req.body
    const PricingGroup = new PricingGroup(data)
    pricingGroup.organisationId = req.user.organisationId
    pricingGroup.save()
        .then(pricingGroup => {
            res.json(pricingGroup)
        })
        .catch(err => {
            res.json(err)
        })
}


module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    PricingGroup.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })
        .then(pricingGroup => {
            res.json(pricingGroup)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    PricingGroup.findByIdAndDelete({ _id: id })
        .then(pricingGroup =>
            res.send(pricingGroup))
        .catch(err => {
            res.json(err)
        })

}
