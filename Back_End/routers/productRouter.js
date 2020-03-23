var express = require('express')
var router = express.Router()
const { productController, loginController } = require('../controllers');

// router.get('/getproduct', productController.getProductJoin);
router.post('/user', loginController.user);
router.get('/keeplogin', loginController.keeplogin)
router.get('/productdetail', productController.productdetail);
router.post('/register', loginController.register);
router.post('/verified', loginController.verified);
// admin
router.get('/listproduct', productController.getProduct);
router.get('/getproducts', productController.getProduct)
router.get('/getcategories', productController.getCategories)
router.delete('/deleteproduct/:id', productController.deleteProduct);
router.put('/editproduct/:id', productController.editProduct);
router.post('/addproduct', productController.addProduct)


module.exports = router;