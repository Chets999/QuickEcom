const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const vendorsController = require('../controllers/vendorsController')
const brandsController = require('../controllers/brandsController')
const customersController = require('../controllers/customersController')
const categoriesController = require('../controllers/categoriesController')
const organisationController = require('../controllers/organisationsController')

const { authenticateUser } = require('../middlewares/authentication')

router.get('/users', usersController.list)
router.post('/users/login', usersController.login)
router.post('/users/register', usersController.create)
router.delete('/users/delete', usersController.destroyAll)



router.get('/organisations', authenticateUser, organisationController.list)
router.get('/organisations/:id', authenticateUser, organisationController.show)
router.post('/organisations', authenticateUser, organisationController.create)
router.delete('/organisations', authenticateUser, organisationController.destroy)
router.delete('/organisations/delete', organisationController.destroyAll)



router.post('/admin/user/new', authenticateUser, userController.createnewuser)


router.get('/categories', authenticateUser, categoriesController.list)
router.post('/categories', authenticateUser, categoriesController.create)
router.get('/categories/:id', authenticateUser, categoriesController.show)
router.put('/categories/:id', authenticateUser, categoriesController.update)
router.delete('/categories/:id', authenticateUser, categoriesController.destroy)



router.get('/brands', authenticateUser, brandsController.list)
router.post('/brands', authenticateUser, brandsController.create)
router.get('/brands/:id', authenticateUser, brandsController.show)
router.put('/brands/:id', authenticateUser, brandsController.update)
router.delete('/brands/:id', authenticateUser, brandsController.destroy)


router.get('/customers', authenticateUser, customersController.list)
router.post('/customers', authenticateUser, customersController.create)
router.get('/customers/:id', authenticateUser, customersController.show)
router.put('/customers/:id', authenticateUser, customersController.update)
router.delete('/customers/:id', authenticateUser, customersController.destroy)


router.get('/vendors', authenticateUser, vendorsController.list)
router.post('/vendors', authenticateUser, vendorsController.create)
router.get('/vendors/:id', authenticateUser, vendorsController.show)
router.put('/vendors/:id', authenticateUser, vendorsController.update)
router.delete('/vendors/:id', authenticateUser, vendorsController.destroy)


module.exports = router