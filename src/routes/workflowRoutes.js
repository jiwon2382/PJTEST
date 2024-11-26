
const express = require('express');
const router = express.Router();
const workflowController = require('../controllers/workflowController');

router.post('/create', workflowController.createWorkflow);
router.get('/:userId', workflowController.getWorkflowsByUser);

module.exports = router;
