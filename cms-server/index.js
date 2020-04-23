const kernel = require('./app/Kernel');
const UserModel = require('./app/model/UserModel');
kernel.init();

kernel.start();

// const user = new UserModel({
//     "first_name": 'test',
//     "last_name": 'test',
//     "phone_number": 'test',
//     "email": 'test@gmail.com',
//     "password": 'test',
// }).save().then(user => console.log(user)).catch(err => console.log(err));
