import express from 'express';
// import jwt from 'jsonwebtoken';
// import { getAllUsers, addUser, patchUser, addUsers, getUserById, validateLogin, verifyToken } from '../controllers/usersController.js';
import { getAllUsers, addUser } from '../controllers/usersController.js';

const router = express.Router();

router.get('/', getAllUsers);

router.post('/signup', addUser);

router.post('/login');

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

export default router;