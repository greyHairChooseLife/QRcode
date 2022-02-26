const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController.js');

router.get('/readItem/:account_id/:item_code', customerController.readItem);
router.post('/cart', customerController.putIntoCart);
router.get('/cart/:customerId', customerController.checkMyCart);
router.post('/updateCart', customerController.updateCart);

module.exports = router;
