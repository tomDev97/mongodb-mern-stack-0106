const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    lastname: String,
    firstname: String
});

const User = mongoose.model('user', UserSchema);
module.exports = {
    User, UserSchema
};