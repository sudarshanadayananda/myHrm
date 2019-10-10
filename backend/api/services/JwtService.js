var JWT = require('jsonwebtoken');
var Config = require('./Config');

module.exports = {

    //Generate JWT token
    craeteToken: function (user, callback) {

        var token = JWT.sign({ user: user.id }, Config.jwtSecret, { expiresIn: Config.jwtExpires });
        return callback(token);

    },

    //Verify JWT token
    varifyToken: function (token, callback) {

        JWT.verify(token, Config.jwtSecret, function (err) {

            if (err)
                return callback({ msg: Config.CB_MSG.ERROR });

            return callback({ msg: Config.CB_MSG.OK });
        });
    }
};