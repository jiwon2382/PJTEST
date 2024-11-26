
const db = require('../config/db.config');

class User {
  static createUser(newUser, callback) {
    const query = 'INSERT INTO users SET ?';
    db.query(query, newUser, callback);
  }

  static findById(userId, callback) {
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [userId], callback);
  }
}

module.exports = User;
