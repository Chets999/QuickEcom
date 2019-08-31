const express = require('express')
const router = express.Router()
const ordersController = require('../controllers/ordersController')
const usersController = require('../controllers/usersController')
const vendorsController = require('../controllers/vendorsController')
const brandsController = require('../controllers/brandsController')
const productsController = require('../controllers/productsController')
const customersController = require('../controllers/customersController')
const categoriesController = require('../controllers/categoriesController')
const organisationController = require('../controllers/organisationsController')

const { authenticateUser } = require('../middlewares/authentication')
const { authorizeUser } = require('../middlewares/authorizeUser')

router.get('/users', usersController.list)
router.post('/users/login', usersController.login)
router.post('/users/register', usersController.create)
router.delete('/users/delete', usersController.destroyAll)



router.get('/organisations', authenticateUser, organisationController.list)
router.get('/organisations/:id', authenticateUser, organisationController.show)
router.post('/organisations', authenticateUser, authorizeUser, organisationController.create)
router.delete('/organisations', authenticateUser, organisationController.destroy)
router.delete('/organisations/delete', organisationController.destroyAll)



router.post('/admin/user/new', authenticateUser, authorizeUser, usersController.createnewuser)


router.get('/categories', authenticateUser, categoriesController.list)
router.post('/categories', authenticateUser, authorizeUser, categoriesController.create)
router.get('/categories/:id', authenticateUser, categoriesController.show)
router.put('/categories/:id', authenticateUser, authorizeUser, categoriesController.update)
router.delete('/categories/:id', authenticateUser, categoriesController.destroy)



router.get('/brands', authenticateUser, brandsController.list)
router.post('/brands', authenticateUser, authorizeUser, brandsController.create)
router.get('/brands/:id', authenticateUser, brandsController.show)
router.put('/brands/:id', authenticateUser, authorizeUser, brandsController.update)
router.delete('/brands/:id', authenticateUser, brandsController.destroy)


router.get('/customers', authenticateUser, customersController.list)
router.post('/customers', authenticateUser, authorizeUser, customersController.create)
router.get('/customers/:id', authenticateUser, customersController.show)
router.put('/customers/:id', authenticateUser, authorizeUser, customersController.update)
router.delete('/customers/:id', authenticateUser, customersController.destroy)


router.get('/vendors', authenticateUser, vendorsController.list)
router.post('/vendors', authenticateUser, authorizeUser, vendorsController.create)
router.get('/vendors/:id', authenticateUser, vendorsController.show)
router.put('/vendors/:id', authenticateUser, authorizeUser, vendorsController.update)
router.delete('/vendors/:id', authenticateUser, vendorsController.destroy)

router.get('/products', authenticateUser, productsController.list)
router.post('/products', authenticateUser, productsController.create)
router.get('/products/:id', authenticateUser, productsController.show)
//router.get('/products/:id', authenticateUser, productsController.showCategoryWise)
router.put('/products/:id', authenticateUser, authorizeUser, productsController.update)
router.delete('/products/:id', authenticateUser, vendorsController.destroy)



router.get('/orders', authenticateUser, ordersController.list)
router.post('/orders', authenticateUser, ordersController.create)
router.get('/orders/:id', authenticateUser, ordersController.show)
router.put('/orders/:id', authenticateUser, authorizeUser, ordersController.update)
router.delete('/orders/:id', authenticateUser, ordersController.destroy)

module.exports = router