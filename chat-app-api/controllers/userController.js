const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userLogin = (req, res) => {
  console.log("Log user in.");
};

const userSignUp = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.userLogin = userLogin;
exports.userSignUp = userSignUp;
