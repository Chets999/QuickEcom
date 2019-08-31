const User = require('../models/user')
const Organisation = require('../models/organisation')


const authorizeUser = function (req, res, next) {

    if (req.user.role == 'ADMIN') {
        next()
    }
    else {
        res.status('401').send({ notice: 'token not available ' })
    }

}

module.exports = {
    authorizeUser
}