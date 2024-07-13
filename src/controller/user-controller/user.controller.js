const User = require("../../models/User.js");

const getAllUser = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// create user
const createUser = async (req, res) => {
  try {
    const newUser = await User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllUser, createUser };
