const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phoneNumber: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);