const User = require('../models/user');
const grpc = require('@grpc/grpc-js');
const bcrypt = require('bcrypt')

module.exports.getUserById = async (call, callback) => {
    const {id} = call.request
    const response = await User.findByPk(id)
    if (!response) return callback({
        message: "User not found.",
        status: grpc.status.NOT_FOUND
    });
    return callback(null, {user: response});
}

module.exports.getAllUsers = async (call, callback) => {
    const response = await User.findAll();
    callback(null, {users: response});
}

module.exports.updateUser = async (call, callback) => {
    const {id, username, email, password} = call.request

    let user = await User.findByPk(id);

    if (!user) return callback({
        message: "User not found.",
        status: grpc.status.NOT_FOUND
    });

    user.username = username
    user.email = email
    user.password = await bcrypt.hashSync(password, 10)

    const response = await user.save();

    callback(null, {user: response});
}

module.exports.registerUser = async (call, callback) => {
    const {username, email, password} = call.request
    const newPassword = await bcrypt.hashSync(password, 10)
    const response = await User.create({username, email, password: newPassword});
    callback(null, {user: response});
}

module.exports.deleteUser = async (call, callback) => {
    const {id} = call.request
    const user = await User.findByPk(id)
    if (!user) return callback({
        message: "User not found.",
        status: grpc.status.NOT_FOUND
    });

    await user.destroy();

    return callback(null, {message: `User user with id: ${id} successfully deleted`});
}



