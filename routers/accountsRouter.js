const express = require('express');
const router = express.Router();
const accountsController = require('../controllers/accountsController.js');

router.get('/read_all', accountsController.read_all_accounts);

module.exports = router;
