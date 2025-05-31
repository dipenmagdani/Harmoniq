const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

const {
  handleUserLogin,
  handleUserSignup,
  handleNewPlaylist,
  // handleUserLogout,
} = require("../controller/user");

router.post("/login", handleUserLogin);
router.post("/signup", handleUserSignup);
router.post("/new-playlist", verifyToken, handleNewPlaylist);
// router.post("/logout", handleUserLogout);

module.exports = router;
