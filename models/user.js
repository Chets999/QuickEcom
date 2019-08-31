const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')



const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                // return validator.isEmail(value)
                return /^.+@[^\.].*\.[a-z]{2,}$/.test(value)
            },
            message: function () {
                return 'invalid email format'
            }
        }
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 126
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    },
    organisationId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Organisation'
    },
    role: {
        type: String,
        enum: ['RECONCILER', 'REVIEWER', 'ADMIN'],
        default: 'ADMIN'
    },
    tokens: [
        {
            token: {
                type: String
            },

            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
})


//PRE SAVE
//GenerateToken
//FindBYCredentials
//FindByToken


//Pre Hooks -- Pre SAVE 
userSchema.pre('save', function (next) {
    const user = this
    if (user.isNew) {
        bcryptjs.genSalt(10)
            .then(function (salt) {
                bcryptjs.hash(user.password, salt)
                    .then(function (encryptedPassword) {
                        user.password = encryptedPassword
                        next()
                    })
            })
    } else {
        next()
    }

})

//Own Instance Methods 
userSchema.methods.generateToken = function () {
    const user = this
    const tokenData = {
        _id: user._id,
        username: user.username,
        Organisationid: user.organisationid,
        organisationName: user.populate({ path: "organisation", select: "name" }),
        role: user.role,
        createdAt: Number(new Date())
    }
    console.log(tokenData)
    const token = jwt.sign(tokenData, 'jwt@123')
    user.tokens.push({
        //token: token
        token
    })

    return user.save()
        .then(function (user) {
            return Promise.resolve(token)
        })
        .catch(function (err) {
            return Promise.reject(err)
        })

}


//Own Static Method 

userSchema.statics.findByToken = function (token) {
    const User = this
    let tokenData
    try {
        tokenData = jwt.verify(token, 'jwt@123')
        console.log(tokenData)
    } catch (err) {
        return Promise.reject(err)
    }

    return User.findOne({
        _id: tokenData._id,
        'tokens.token': token
    })


}

//Class or Static Method
userSchema.statics.findByCredentials = function (email, password) {
    const NewUser = this // Here this refers to User model and hence capital U 
    return NewUser.findOne({ email })
        .then(function (user) {
            if (!user) {
                return Promise.reject('invalid email')
            }
            return bcryptjs.compare(password, user.password)
                .then(function (result) {
                    if (result) {
                        return Promise.resolve(user)
                        //instead of shorthand way 
                        // return new Promise(function(resolve, reject){
                        //         resolve(user)
                        // })
                    } else {
                        return Promise.reject('invalid password ')
                    }
                })

        })
        .catch(function (err) {
            return Promise.reject(err) //shorthand way of creating a new Promise object
        })

}

const User = mongoose.model('User', userSchema)
module.exports = User