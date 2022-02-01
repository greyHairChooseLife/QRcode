const express = require('express');
const router = express.Router();
const accountsController = require('../controllers/accountsController.js');

router.get('/read_all', accountsController.read_all_accounts);
router.post('/create_account', accountsController.create_account);

module.exports = router;
