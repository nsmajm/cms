const {generateToken} = require('../../vendor/TokenHelper');
module.exports = {
    successResponse: async (data, message = 'user created successfully', code = 200) => {
        return {
            token: await generateToken(data),
            message: message,
            status: code
        };
    },
    errorResponse: async (data = null, message = 'Error', code = 500) => {
        return {
            token: null,
            message: message,
            status: code
        }
    }
};