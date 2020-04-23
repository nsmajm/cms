const mongoose = require('mongoose');
const {DB_CONNECTION_STRING} = require('./config');
mongoose.set('useCreateIndex', true);
module.exports = {
    dbConnect: () => {
        return mongoose.connect(
            DB_CONNECTION_STRING,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
    },
    mongoose: mongoose,
};