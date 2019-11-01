/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

let Config = require('../services/Config');
let BcryptService = require('../services/BcryptService');
let JwtService = require('../services/JwtService');

module.exports = {
    
    authenticate: function (req, res) {
        
        let email = req.body.email;
        let password = req.body.password;

        //Email validation.
        if(!email || email === 'null' || email === 'undefined'){
            return res.badRequest({
                status: Config.STATUS.FAILED,
                message: Config.RESPONSE_MESSAGE.VALIDATION_FAILED,
                desc: 'Email is required'
            });
        }

        //Password validation.
        if(!password) {
            return res.badRequest({
                status: Config.STATUS.FAILED,
                message: Config.RESPONSE_MESSAGE.VALIDATION_FAILED,
                desc: 'Password is required'
            });
        }

        //User find query.
        let criteria = { email: email };

        User.findOne(criteria)
            . exec(function (err, user) {
                
                if (err) {
                    sails.log.error('Error occured when authenticating user at AuthController.authenticate, %s', new Error(err));
                    return res.serverError({ status: Config.STATUS.Error, message: Config.RESPONSE_MESSAGE.INTERNAL_SERVER_ERROR });
                }
                if (!user) {
                    sails.log.error('Cannot find a user with email, %s', email);
                    return res.send({ status: Config.STATUS.FAILED, message: Config.RESPONSE_MESSAGE.NOT_FOUND });
                }
                BcryptService.comparePassword(password, user.password, function (isMatched) {

                    if(isMatched) {
                        JwtService.craeteToken(user, function (token) {

                            let data = { email: user.email, name: user.email, role: user.role };
                            return res.send({ status: Config.STATUS.SUCCESS, data: data, token: token });
                        });
                    }
                    else
                    return res.send({ status: Config.STATUS.FAILED, message: Config.RESPONSE_MESSAGE.INVALID_PASSWORD });
                });
             });
    },

       
};
