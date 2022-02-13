const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController.js');

router.get('/readItem/:account_id/:item_code', customerController.readItem);
router.post('/basket', customerController.putIntoBasket);
router.get('/basket/:customerId', customerController.readBasket);

module.exports = router;
