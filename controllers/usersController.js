const User = require('../models/user')
const Organisation = require('../models/organisation')



module.exports.list = (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
}


//SIGN-IN
module.exports.login = (req, res) => {
    const body = req.body
    User.findByCredentials(body.email, body.password)
        .then(function (user) {
            return user.generateToken()
        })
        .then((token) => {
            res.setHeader('x-auth', token).send()
        })
        .catch(err => res.send(err))
}

module.exports.createnewuser = (req, res) => {
    const body = req.body
    console.log(body)
    console.log("request details below")
    console.log(req.user)


    if (req.user.role == 'ADMIN') {

        const user = new User({ username: body.username, email: body.email, password: body.password, organisationId: req.user.organisationId, mobile: body.mobile, role: body.role })
        user.save()
            .then(user => { res.json({ notice: 'successfully created a User with role :', user }) })
            .catch(err => { res.json(err) })
    } else {
        res.json({ notice: 'You are not authorised' })
    }
}


// {
// "username": "user1",
// "email": user1@gmail.com,
// "password": ,
// "mobile",
// "organisation":,
// "gst":
// }

module.exports.create = (req, res) => {
    const body = req.body
    console.log(body)
    const organisation = new Organisation({ name: body.organisation, gst: body.gst })
    organisation.save()
        .then(organisation => {
            console.log(organisation._id)
            const user = new User({ username: body.username, email: body.email, password: body.password, organisationId: organisation._id, mobile: body.mobile })
            user.save()
                .then(user => { res.json({ notice: 'successfully created a User', user }) })
                .catch(err => {
                    Organisation.findByIdAndDelete(organisation._id)
                        .then(organisation => {
                            res.json({ msg: 'Deleted the Organisation as well as User details has error ', error: err })
                        })
                })
                .catch(err => res.json(err))
        })
}

module.exports.destroyAll = (req, res) => {
    User.deleteMany()
        .then(users =>
            res.send('all users deleted successfully '))
}

// localhost:3000/users/account 
module.exports.account=(req,res)=>{
    const { user } = req 
    res.send(user)
}


// localhost:3000/users/logout
module.exports.logout=(req,res)=>{
    const { user, token } = req 
    User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token }}})
        .then(function(){
            res.send({notice: 'successfully logged out'})
        })
        .catch(function(err){
            res.send(err)
        })
}