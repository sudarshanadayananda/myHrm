/**
 * Created by Sudarshana on 9/28/19.
 **/
/**
 * AuthController
 *
 * @description :: Server-side logic for managing user authentication
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 **/
var Config = require('../services/Config');
var BcryptService = require('../services/BcryptService');
var JwtService = require('../services/JwtService');

module.exports = {

    authenticate: function (req, res) {

        var email = req.body.email;
        var password = req.body.password;

        // Email validation.
        if (!email || email === 'null' || email === 'undefined') {
            return res.badRequest({
                status: Config.STATUS.FAILED,
                message: Config.RESPONSE_MESSAGE.VALIDATION_FAILED,
                desc: 'Email is required.'
            });
        } 
        // Password validation.
        if (!password) {
            return res.badRequest({
                status: Config.STATUS.FAILED,
                message: Config.RESPONSE_MESSAGE.VALIDATION_FAILED,
                desc: 'Password is required.'
            });
        }
        // User find query.
        var criteria = { email: email };

        User.findOne(criteria)
            .exec(function (err, user) {

                if (err) {
                    sails.log.error('Error occurred when authenticating user at AuthController.authenticate, %s', new Error(err));
                    return res.serverError({ status: Config.STATUS.ERROR, message: Config.RESPONSE_MESSAGE.INTERNAL_SERVER_ERROR });
                }
                if (!user) {
                    sails.log.error('Cannot find a user with email: %s', email);
                    return res.send({ status: Config.STATUS.FAILED, message: Config.RESPONSE_MESSAGE.NOT_FOUND });
                }
                BcryptService.comparePassword(password, user.password, function (isMatched) {

                    if (isMatched) {
                        JwtService.createToken(user, function (token) {

                            var data = { email: user.email, name: user.name, role: user.role };
                            return res.send({ status: Config.STATUS.SUCCESS, data: data, token: token });
                        });
                    }
                    else
                        return res.send({ status: Config.STATUS.FAILED, message: Config.RESPONSE_MESSAGE.INVALID_PASSWORD });
                });
            });
    },
};