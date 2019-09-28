/**
 * Created by Sudarshana on 9/28/19.
 **/

var JWT = require('jsonwebtoken');
var Config = require('./Config');

module.exports = {

  /**
   * Generate jwt token
   *
   * @param user :: logged user
   * @param callback :: callback function
   *
   * @return token :: jwt token
   **/
  createToken: function (user, callback) {

    var token = JWT.sign({user: user.id}, Config.jwtSecret, { expiresIn: Config.jwtExpires });
    return callback(token);
  },

  /**
   * Verify jwt token
   *
   * @param token :: jwt token
   * @param callback :: callback function
   *
   * @return message
   **/
  verifyToken: function (token, callback) {

    JWT.verify(token, Config.jwtSecret, function (err) {

      if (err)
        return callback({ msg: Config.CB_MSG.ERROR });

      return callback({ msg: Config.CB_MSG.OK });
    });
  }

};
