const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController.js');

router.get('/read/:account_id/:item_code', customerController.readItem);

module.exports = router;
