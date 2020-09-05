const userModel = require("../models/user.model");
const db = require('../config/mongoose')

exports.createUser = (req, res) => {
    const userData = req.body;

    try {
        const user = new userModel(userData);
        console.log('created!');
        user.save();
        res.json(user);
    } catch (error) {
        console.log(error);
    } finally {
        return;
    }
};

exports.findByID = async (req, res) => {
    const id = req.params.id;
    var user = await userModel.findOne({_id: id});
    res.json(user);
};

exports.getAll = async (req, res) => {
    var users = await userModel.find({});
    res.json(users);
};