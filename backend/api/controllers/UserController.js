/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
      addUser: function(req, res) {
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        let role = req.body.role;

        User.findOne({ email: email }).exec(function (err, fUser) {

          if (err) {
            return res.serverError(err)
          }
          if (fUser) {
            return res.send({ message: "EXISTS"});
          }
          if (!fUser) {
            User.create(req.body).exec(function (err, nUser) {
              if (err) {
                return res.serverError(err);
              }
              //next();
              return res.send({ message: "SUCCESS", data: nUser})
            });
          }
        });
      }


    
};

