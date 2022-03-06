const express = require('express');
const router = express.Router();
const accountsController = require('../controllers/accountsController.js');

router.get('/read_all', accountsController.read_all_accounts);
router.post('/create_account', accountsController.create_account);
router.post('/update_account', accountsController.update_account);
router.post('/delete_account', accountsController.delete_account);
router.post('/printQRcode', accountsController.print_qrcode);

module.exports = router;
