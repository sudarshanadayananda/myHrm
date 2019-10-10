/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
var Config = require('./../api/services/config');

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  var admin = {
    name: 'Fake Admin',
    email: 'admin@myhrm.com',
    password: 'admin123',
    role: Config.USER_ROLE.ADMIN_USER
  };
  User.count({ email: admin.email }).exec(function (err, count) {

    if (err) {
      sails.log.error("Error occurred in creating fake admin user at config/bootstrap.js, %s", new Error(err));
      return cb(err);
    }
    if (count > 0) {
      return cb();
    }
    User.create(admin).exec(function (err) {

      if (err) {
        sails.log.error("Error occurred in creating fake admin user at config/bootstrap.js, %s", new Error(err));
        return cb(err);
      }
      return cb();
    });
  });
};
