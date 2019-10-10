/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var BcryptService = require('../services/BcryptService');

module.exports = {

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
      required: true,
      minlength : [4,'Password must be atleast 4 character long']
    },
    role: {
      type: 'string',
      required: true,
      enum: ['ADMIN_USER', 'APP_USER']
    }
  },


  //custom validation for email
  attributes: function(values) {
    values.email.validate((val) => {
      emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(val);
    }, 'Invalid e-mail.');
    
    
  },

  // //Events - encrypt password
  // beforeCreate: function(next) {

  // }

  // // Sails lifecycle callback which executed before creating user
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

  // Sails lifecycle callback which executed before updating user
  beforeUpdate: function (values, proceed) {

    if (values.password) {

      BcryptService.hashPassword(values.password, function (hashPassword) {
        values.password = hashPassword;
        proceed();
      });
    } else {

      proceed();
    }
  }

};

