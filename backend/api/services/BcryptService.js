/**
 * Created by Sudarshana on 9/28/19.
 */

var BCRYPT = require('bcrypt');

module.exports = {

  /**
   * Generate hash password
   *
   * @param password :: password
   * @param callback :: callback function
   *
   * @return password :: hash password
   **/
  hashPassword: function (password, callback) {

    BCRYPT.hash(password, 10)
      .then(function (hashPassword) {

        callback(hashPassword);
    });
  },

  /**
   * Compare password
   *
   * @param enteredPassword :: user entered password
   * @param password :: user password
   * @param callback :: callback function
   *
   * @return boolean
   **/
  comparePassword: function (enteredPassword, password , callback) {

    BCRYPT.compare(enteredPassword, password)
      .then(function (match) {

      callback(match);
    });
  }

};
