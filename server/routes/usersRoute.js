const express = require("express");
const {
  getAllUsers,
  addUser,
  login,
  logout,
  catchAll,
  getUserData,
  followUser,
} = require("../controllers/usersController.js");

const { authUser } = require("../middleware/authUser.js");

const router = express.Router();

router.get("/", authUser, getAllUsers);

router.get("/data", authUser, getUserData);

router.get("/data/:id", getUserData);

router.post("/signup", addUser);

router.post("/login", login);

router.post("/logout", logout);

router.post("/follow/:id", authUser, followUser);

router.use(catchAll);

module.exports = router;
