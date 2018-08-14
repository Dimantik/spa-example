const mongoose = require('mongoose');

const userScheme = mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model('User', userScheme);

module.exports = User;