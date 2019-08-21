const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')
const organisationController = require('../controllers/organisationsController')
const categoryController = require('../controllers/categoriesController')

const { authenticateUser } = require('../middlewares/authentication')

router.get('/users', userController.list)
router.post('/users/login', userController.login)
router.post('/users/register', userController.create)
router.delete('/users/delete', userController.delete)



router.get('/organisations', authenticateUser, organisationController.list)
router.post('/organisations', authenticateUser, organisationController.list)

router.delete('/organisations/delete', organisationController.delete)



router.post('/admin/user/new', authenticateUser, userController.createnewuser)


router.get('/categories', authenticateUser, categoryController.list)
router.get('/categories/register', authenticateUser, userController.create)







router.get('/categories')
module.exports = router