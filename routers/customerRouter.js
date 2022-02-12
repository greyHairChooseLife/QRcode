const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController.js');

router.get('/read', customerController.readItem);

module.exports = router;
