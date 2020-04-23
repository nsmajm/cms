const {generateToken} = require('../../vendor/TokenHelper');
module.exports = {
    successResponse: async (data) => {
        return {
            'token': await generateToken(data),
            'message': 'user created successfully',
            'success': true
        };
    },
    errorResponse: async (data) => {
        return {
            'token': null,
            'message': data,
            'success': false
        }
    }
};