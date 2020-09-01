const userModel = require("../models/user.model");

userModel = require('../models/user.model');

exports.createUser = (userData) => {
    const user = new userModel(userData);
    return user.save();
};

exports.findByID = (id) => {
    
};