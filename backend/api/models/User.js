/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var BcryptService = require('../services/BcryptService');

module.exports = {

  schema: true,

  attributes: {

    name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    role: {
      type: 'string',
      required: true,
      enum: ['ADMIN_USER', 'APP_USER']
    }
  },
  /**
   * Sails lifecycle callback which executed before creating user
   * @param values :: user object
   * @param proceed 
   */
  beforeCreate: function (values, proceed) {

    if (values.password) {

      BcryptService.hashPassword(values.password, function (hashPassword) {
        values.password = hashPassword;
        proceed();
      });
    } else {

      proceed();
    }
  },
  /**
   * Sails lifecycle callback which executed before updating user
   * @param values :: user object
   * @param proceed 
   **/
  beforeUpdate: function (values, proceed) {

    if (values.password) {

      bcryptService.hashPassword(values.password, function (hashPassword) {
        values.password = hashPassword;
        proceed();
      });
    } else {

      proceed();
    }
  }
};

