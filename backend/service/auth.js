const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const setUser = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    secret
  );
};

const getUser = (token) => {
  if (!token) return null;
  return jwt.verify(token, secret);
};

module.exports = {
  setUser,
  getUser,
};
