const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const organisationController = require('../controllers/organisationController')
const categoryController = require('../controllers/categoryController')

const { authenticateUser } = require('../middlewares/authentication')

router.get('/users', userController.list)
router.post('/user/login', userController.login)
router.post('/user/register', userController.create)
router.delete('/users/delete', userController.delete)



router.get('/organisations', authenticateUser, organisationController.list)
router.post('/organisations', authenticateUser, organisationController.list)

router.delete('/organisations/delete', organisationController.delete)



router.post('/admin/user/new', authenticateUser, userController.createnewuser)



router.get('/categories', categoryController.list)
router.get('/categories/register', userController.create)







router.get('/categories')
module.exports = router