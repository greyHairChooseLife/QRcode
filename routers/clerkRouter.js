const express = require('express');
const router = express.Router();
const clerkController = require('../controllers/clerkController.js');

router.get('/visitor', clerkController.getVisitorList);
router.post('/visitor', clerkController.searchVisitor);

module.exports = router;
