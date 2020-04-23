const {mongoose} = require('../../config/DbConnection');
const {compare, genSalt, hash} = require('bcryptjs');
const {isEmail} = require('validator');
const SALT_WORK_FACTOR = 10;

let UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: false
    },
    phone_number: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        validate: [isEmail, 'invalid email'],
        createIndexes: {unique: true},
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    status: {
        type: Number,
        default: 1
    },
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    }
});
UserSchema.pre('save', function (next) {
    let user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
let Users = mongoose.model('users', UserSchema);
module.exports = Users;
