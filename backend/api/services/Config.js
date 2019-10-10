module.exports = {

    USER_ROLE: {
        ADMIN_USER: 'ADMIN_USER',
        APP_USER: 'APP_USER'
    },
    jwtSecret: 'myHrmSecretKey', // JWT secret key.
    jwtExpires: 24 * 60 * 60, // Token validity time period in seconds.

    // callback messages.
    CB_MSG: {
        OK: 'OK',
        ERROR: 'ERROR',
        FAILED: 'FAILED'
    },

    // http response statuses.
    STATUS: {
        SUCCESS: 'SUCCESS',
        ERROR: 'ERROR',
        FAILED: 'FAILED'
    },

    // http response messages.
    RESPONSE_MESSAGE: {
        INTERNAL_SERVER_ERROR: 'Internal Server Error',
        INVALID_JWT: 'JWT is not valid',
        NOT_FOUND: 'Could not find requesting resource',
        INVALID_PASSWORD: 'Password is not valid',
        VALIDATION_FAILED: 'validation failed'
    }
};