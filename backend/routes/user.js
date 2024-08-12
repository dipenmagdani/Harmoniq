const express = require("express");
const router = express.Router();
const {
  handleUserLogin,
  handleUserSignup,
  handleUserLogout,
} = require("../controller/user");

router.post("/login", handleUserLogin);
router.post("/signup", handleUserSignup);
router.post("/logout", handleUserLogout);

module.exports = router;
