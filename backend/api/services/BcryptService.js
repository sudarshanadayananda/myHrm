var BCRYPT = require('bcryptjs');

module.exports = {

     //generate hash password
     hashPassword: function (password, callback) {

          BCRYPT.hash(password, 10)
               .then(function (hashPassword) {

                    callback(hashPassword);

               });
     },


     //compare password
     comparePassword: function (enteredPassword, password, callback) {

          BCRYPT.compare(enteredPassword, password)

               .then(function (match) {

                    callback(match);

               });
     }

};
