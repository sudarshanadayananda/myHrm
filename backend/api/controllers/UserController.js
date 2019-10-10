/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    //add user
    addUser: function(req, res) {
        var name     =  req.body.name;
        var email    =  req.body.email;
        var password =  req.body.password;
        var role     =  req.body.role;

        console.log(req.body);
        User.findOne({ email: email}).exec(function (err, fUser) {

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
    },

    
};

