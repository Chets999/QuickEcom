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
        User.findByCredentials(body.email,body.password)
        .then(function(user){
            return user.generateToken()
        })
        .then((token) => {
            res.setHeader('x-auth', token).send()
        })
        .catch( err =>  res.send(err))
}

module.exports.createnewuser = (req, res) => {
    const body = req.body
    console.log(body)
    console.log("request details below")
    console.log(req.user)


    if( req.user.role == 'ADMIN'){
      
        const user = new User({ username: body.username, email:body.email , password:body.password ,organisationid:req.user.organisationid,  mobile:body.mobile , role: body.role })
            user.save()
            .then( user => { res.json( { notice: 'successfully created a User with role :', user } ) }  )
            .catch(err =>  {  res.json(err) }) 
    }else {
        res.json({notice: 'You are not authorised'})
    }
}

module.exports.create = (req, res) => {
    const body = req.body
    console.log(body)
    const organisation = new Organisation({ name: body.organisation, gst: body.gst })
    organisation.save()
        .then(organisation => {
            console.log(organisation._id)
const user = new User({ username: body.username, email:body.email , password:body.password ,organisationid:organisation._id,  mobile:body.mobile })
            user.save()
            .then( user => { res.json( { notice: 'successfully created a User', user } ) }  )
            .catch(err => 
                {
                Organisation.findByIdAndDelete(organisation._id)
                .then( organisation => {
                    res.json({ msg:'Deleted the Organisation as well as User details has error ', error : err } ) 
                })                
        })
        .catch(err => res.json(err) )       
})}

module.exports.delete = (req,res) => {
    User.deleteMany()
    .then(users =>
        res.send('all users deleted successfully '))
}
