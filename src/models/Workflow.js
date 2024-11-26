
const db = require('../config/db.config');

class Workflow {
  static createWorkflow(newWorkflow, callback) {
    const query = 'INSERT INTO workflows SET ?';
    db.query(query, newWorkflow, callback);
  }

  static findByUserId(userId, callback) {
    const query = 'SELECT * FROM workflows WHERE user_id = ?';
    db.query(query, [userId], callback);
  }
}

module.exports = Workflow;
