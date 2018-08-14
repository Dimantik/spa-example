const mongoose = require('mongoose');
const User = require('../models/user');
const config = require('../../config');

function setUpConnection(){
    mongoose.connect(config.db);
}

function getUsers(){
    return User.find();
}

function getUser(id){
    return User.findById(id);
}

function replaceUser(data){
    return getUser(data.id).then( user => {
        console.log(data);
        user.name = data.name;
        user.age = data.age;

        return user.save();
    })
}

function createUser(data){
    const user = new User({
        name: data.name,
        age: data.age
    });

    console.log(user);

    return user.save();
}

function deleteUser(id){
    return User.findById(id).remove();
}

module.exports = {
    setUpConnection: setUpConnection,
    getUser: getUser,
    getUsers: getUsers,
    replaceUser: replaceUser,
    createUser: createUser,
    deleteUser: deleteUser
}
