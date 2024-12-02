const express = require("express");
const {
  getAllUsers,
  addUser,
  login,
  catchAll,
  getUserData,
  getSpecificUserData,
  followUser,
} = require("../controllers/usersController.js");

const { authUser } = require("../middleware/authUser.js");

const router = express.Router();

router.get("/", authUser, getAllUsers);

router.get("/data/self", authUser, getUserData);

router.get("/data/:id", getSpecificUserData);

router.post("/signup", addUser);

router.post("/follow/:id", followUser);

router.post("/login", login);

router.use(catchAll);

// router.get('/:id', getUserById);
// //expects a body of the form { user: {username: "...", email: "...", password: "..."} }
// //sends back an object of the form { mongoMessage: (message generated by mongoose)}

// router.post('/many', addUsers);

// //expects a body of the form { user: {username: "...", email: "...", password: "..."} }
// //sends back an object of the form { isValid:true/false }
// router.post('/validate', validateLogin);

// router.patch('/', patchUser);

// router.delete('/:id', (req,res) => {
// });

// router.use((err, req, res, next) => {
//     console.log("error in the users route or controller", err);

//     res.status(500).send("something went wrong in the server...");
// });

module.exports = router;
