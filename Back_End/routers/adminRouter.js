var express = require('express')
var router = express.Router()
var { admincontroller } = require('../controllers');

router.get('/trxlist',admincontroller.getTransaction);
router.delete('/deletetrx/:id',admincontroller.deleteTransaction);
// user
router.get('/listusers',admincontroller.getUsers);
router.delete('/deleteuser/:by', admincontroller.deleteUser)
router.post('/adduser', admincontroller.addUser);
router.put('/edituser/:id', admincontroller.editUser);

module.exports = router;