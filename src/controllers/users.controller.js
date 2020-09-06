const userModel = require("../models/user.model");
const env = require('../config/env')
const bcrypt = require('bcrypt');
const helpers = require('../helpers/helpers')
const saltRounds = env.saltRounds;

exports.createUser = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password } = req.body;
    let taken = await helpers.emailTaken(email);
    if(taken){
        return res.json({message: 'email taken'});
    }
    try {
        let hash = await bcrypt.hash(password, saltRounds);
        const user = new userModel({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            password: hash
        });
        await user.save();
        res.json(user);
    } catch (error) {
        console.log(error);
    }
};

exports.findByID = async (req, res) => {
    const id = req.params.id;
    var user = await userModel.findOne({_id: id});
    res.json(user);
};

exports.getAll = async (req, res) => {
    console.log('i dey here')
    var users = await userModel.find({});
    res.json(users);
};

exports.deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await userModel.findByIdAndDelete(id);
        console.log('deleted');
        res.json({message: 'user deleted successfully'})
    } catch (error) {
        console.error(error);
        res.json({message: 'errorr'})
    }
};