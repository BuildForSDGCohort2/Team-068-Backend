const bcrypt = require('bcrypt');
const Users = require("../models/user.model");

exports.userExists = async (email, password) => {
    const user = await Users.findOne({email: email});
    if( user ) {
        console.log(`password: ${user.password}`)
        return bcrypt.compare(password, user.password)
    }
    return false;
}


exports.emailTaken = async (email) => {
    const user = await Users.findOne({email: email});
    return user ? true : false;
}