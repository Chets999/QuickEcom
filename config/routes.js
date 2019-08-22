const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')
const organisationController = require('../controllers/organisationsController')
const categoriesController = require('../controllers/categoriesController')

const { authenticateUser } = require('../middlewares/authentication')

router.get('/users', userController.list)
router.post('/users/login', userController.login)
router.post('/users/register', userController.create)
router.delete('/users/delete', userController.destroyAll)



router.get('/organisations', authenticateUser, organisationController.list)
router.get('/organisations/:id', authenticateUser, organisationController.show)
router.post('/organisations', authenticateUser, organisationController.list)

router.delete('/organisations/delete', organisationController.destroyAll)



router.post('/admin/user/new', authenticateUser, userController.createnewuser)


router.get('/categories', authenticateUser, categoriesController.list)
router.post('/categories', authenticateUser, categoriesController.create)
router.get('/categories/:id', authenticateUser, categoriesController.show)








router.get('/categories')
module.exports = router