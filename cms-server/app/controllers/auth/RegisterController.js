const userModel = require('../../model/UserModel');
const {successResponse, errorResponse} = require('../../transformer/JsonTransformer');

module.exports = {
    register: async (req, res) => {
        let findUser;
        let {first_name, last_name, phone_number, email, password} = req.body;
        findUser = await userModel.findOne({'email': email});
        if (await findUser) {
            return res.json(
                await errorResponse(`${email} already exists`));
        }
        let user = await new userModel({
            first_name: first_name,
            last_name: last_name,
            phone_number: phone_number,
            email: email,
            password: password
        }).save(async (err, user) => {
            if (err) {
                return res.json(await errorResponse(err))
            }
            return await res.json({
                'response': await successResponse(user)
            });
        });
    },
    massData: async (req, res) => {
        const users = req.body;
        for (i = 0; i < users.length; i++) {
            await new userModel({
                first_name: users[i].first_name,
                last_name: users[i].last_name,
                phone_number: users[i].phone_number,
                email: users[i].email,
                password: users[i].password
            }).save();
            console.log(i)
        }
    }
};