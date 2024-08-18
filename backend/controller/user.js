const User = require("../models/userModel");
const { getUser, setUser } = require("../service/auth");
const bcrypt = require("bcrypt");

const handleUserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ msg: "Email and Password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send({ message: `User not found. Please check your email.` });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .send({ message: "Incorrect Password. Please check your password." });
    }

    const token = setUser(user);

    return res
      .status(200)
      .send({ message: "Login Successful", name: user.name, token: token });
  } catch (e) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
};

const handleUserSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(409)
        .json({ message: "User with this email already exists. " });
    }

    const userCreate = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (userCreate) {
      return res
        .status(201)
        .json({ message: "Your account has been created. Redirecting..." });
    } else {
      return res.status(500).json({ message: "Failed to create user" });
    }
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(409)
        .json({ message: "User with this email already exists. Please Login" });
    }
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

// const handleUserLogout = (req, res) => {
//   return res.status(200).send({ message: "Logout Successful" });
// };

module.exports = {
  handleUserLogin,
  handleUserSignup,
  // handleUserLogout,
};
