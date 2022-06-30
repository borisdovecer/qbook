const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel.js');
const {ObjectId} = require("mongodb");

const logout = (req, res) => {
    req.session.destroy(()=>{
        res.redirect('/');
    });
};

const register = async (req, res) => {
    const { username, name, lastname, email, password, role } = req.body;

    userModel.findOne({ username }).then(user => {
        if (user) {
            res.send({message: 'go on..'})
        } else {
            const newUser = new userModel({
                username,
                name,
                lastname,
                email,
                password,
                role
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            res.send({message: 'all good...'});
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
    res.send({message: 'hello'});
}

const getAllUsers = async (req, res) => {
    try {
        const response = await userModel.find({});
        res.send({ data: response })
    } catch (e) {
        console.log(e);
    }
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await userModel.find({ _id: id });
        res.send({ data: response })
    } catch (e) {
        console.log(e);
    }
};

const getUser = async (req, res) => {
    if (req.user) {
        res.json(req.user);
    }
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, lastname, email, role } = req.body;
    try {
        let find = { _id: new ObjectId(id) };
        const set = { name, lastname, email, role };

        await userModel.updateOne(find,  set, { upsert: true }  , data => res.send({message: 'updated'})).clone()
    } catch (e) {
        console.log(e);
    }
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await userModel.deleteOne({ _id: id });
        res.send({ message: 'deleted' })
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    logout,
    register,
    getAllUsers,
    getUserById,
    getUser,
    updateUser,
    deleteUser
}
