const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const organisationController = require('../controllers/organisationController')

const {authenticateUser} = require('../middlewares/authentication')

router.post('/user/login', userController.login)
router.post('/user/register', userController.create)
router.post('/admin/user/new',authenticateUser, userController.createnewuser)
router.get('/users', userController.list)

//router.post('/')



router.get('/organisations', organisationController.list)
router.delete('/organisations/delete', organisationController.delete)
router.delete('/users/delete', userController.delete)

module.exports = router