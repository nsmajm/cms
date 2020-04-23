const userModel = require('../../model/UserModel');
const {compare} = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {successResponse, errorResponse} = require('../../transformer/JsonTransformer');
module.exports = {
    login: async (req, res) => {
        let {email, password} = req.body;
        let findUser = await userModel.findOne({'email': email});
        if (!findUser) {
            return await res.json(errorResponse('User not found'));
        }
        await compare(password, findUser.password, async (err, result) => {
            if (err) {
                return await res.json(errorResponse('invalid email or password'))
            } else {
                if (result === false) {
                    return await res.json(errorResponse('invalid email or password'))
                } else {
                    if (result === true) {
                        return await res.json(await successResponse(findUser,'logged in'));
                    }
                }
            }
        })

    }
};