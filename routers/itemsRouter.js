const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController.js');

router.get('/read_all', itemsController.read_all_items);
router.get('/control_item', itemsController.control_item);
router.post('/create_item', itemsController.create_item);
router.post('/update_item', itemsController.update_item);
router.post('/delete_item', itemsController.delete_item);

module.exports = router;
