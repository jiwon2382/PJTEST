
const Workflow = require('../models/Workflow');

exports.createWorkflow = (req, res) => {
  const newWorkflow = req.body;
  Workflow.createWorkflow(newWorkflow, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Error creating workflow' });
    } else {
      res.status(201).send(result);
    }
  });
};

exports.getWorkflowsByUser = (req, res) => {
  const userId = req.params.userId;
  Workflow.findByUserId(userId, (err, workflows) => {
    if (err) {
      res.status(500).send({ message: 'Error retrieving workflows' });
    } else {
      res.status(200).send(workflows);
    }
  });
};
