const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController.js');

router.get('/read_all', itemsController.read_all_items);
router.get('/control_item', itemsController.control_item);

module.exports = router;
