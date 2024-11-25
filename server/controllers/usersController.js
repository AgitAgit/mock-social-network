import User from "../models/userModel.js";
// import bcrypt from "bcrypt";
// import jwt from 'jsonwebtoken';

// const secretKey = 'secretKey';

//path params:none
//query params:none
//example request body:none
/*example response:{
    "users": [*users data*]
}*/

export const getAllUsers = async function (req, res, next) {
  try {
    const users = await User.find();
    res.json({ users });
    next();
  } catch (error) {
    next(error);
  }
};

//path params:none
//query params:none
/*example request body:{
displayName:testy,
email:testy@gmail.com
}*/
/*example response:{
    "mongoMessage": {
        "displayName": "testy",
        "email": "testy@gmail.com",
        "_id": "67446d8e8c9edc19b0f4b1df",
        "__v": 0
    }
}*/
export async function addUser(req, res, next) {
  try {
    const data = req.body;
    const user = new User({
      displayName: data.displayName,
      email: data.email,
    });
    const newUser = await user.save();
    res.status(201).json({ mongoMessage: newUser });
    next();
  } catch (error) {
    next(error);
  }
}

//path params:none
//query params:none
/* example request body:{
email:testy@gmail.com
} */
/* example response:{
    "message": "Logged in successfully!",
    "userDetails": [
        {
            "_id": "67446d8e8c9edc19b0f4b1df",
            "displayName": "testy",
            "email": "testy@gmail.com",
            "__v": 0
        }
    ]
} */
export async function loginUser(req, res, next) {
  try {
    const userEmail = req.body.email;
    const user = await User.find({ email: userEmail });

    if (user) {
      res
        .status(201)
        .json({ message: "Logged in successfully!", userDetails: user });
    } else {
      res.status(404).json({ message: "user not found" });
    }
    next();
  } catch (error) {
    next(error);
  }
}

// export const getUserById = async function (req, res, next) {
//   try {
//     const user = await User.findById(req.params.id);
//     res.json(user);
//     next();
//   } catch (error) {
//     next(error);
//   }
// };

// //expects a body that looks like { user: {name: "...", email: "...", password: "..."} }
// export async function addUser(req, res, next) {
//   try {
//     console.log(req.body);
//     const data = req.body.user;
//     console.log(data);

//     const hashedPass = await bcrypt.hash(data.password, 10);
//     const user = new User({
//       username: data.username,
//       email: data.email,
//       password: hashedPass,
//     });
//     const newUser = await user.save();
//     res.status(201).json({ mongoMessage: newUser });
//     next();
//   } catch (error) {
//     next(error);
//   }
// }

// export async function addUsers(req, res, next) {
//   try {
//     const users = req.body.users;
//     const reply = await User.insertMany(users);
//     res.json({ message: "successfuly added users", users });
//     next();
//   } catch (error) {
//     next(error);
//   }
// }

// export async function patchUser(req, res, next) {
//   try {
//     const newUser = req.body.user;
//     const user = await User.findById(req.body.user._id);
//     if (newUser.username) user.username = newUser.username;
//     if (newUser.password) user.password = newUser.password;
//     if (newUser.email) user.email = newUser.email;
//     const result = await user.save();
//     res.json({ message: "patch successful", result });
//     next();
//   } catch (error) {
//     next(error);
//   }
// }

// export const deleteUserById = async function (req, res, next) {
//   try {
//     const reply = await User.findByIdAndDelete(req.params.id);
//     res.json({ message: "delete successful", reply });
//     next();
//   } catch (error) {
//     next(error);
//   }
// };

// export const validateLogin = async function (req, res, next) {
//   try {
//     const user = req.body.user;
//     if(!user.password) return res.json({ message: "password is required..."});
//     const storedUser = await User.findOne({ username: user.username });
//     const isValid = bcrypt.compareSync(user.password, storedUser.password);

//     const token = jwt.sign(
//       { userId: storedUser._id, role:storedUser.role },//this is the payload
//       secretKey,
//       { expiresIn: '1h' }
//     );

//     if(isValid){
//       return res.json({ isValid, token });
//     }
//     else return res.json({ message:"could not generate token..." });

//   } catch (error) {
//     next(error);
//   }
// };

// export const verifyToken = async function(req, res, next){
//   try{
//     const token = req.headers["authorization"];
//     if(!token) return res.status(403).send("token is required...");
//     jwt.verify(token, secretKey, (err, decoded) => {
//       if(err) return res.status(403).send("Invalid token");
//       req.userId = decoded.userId;
//       req.userRole = decoded.role;
//       console.log("from usersController.verifyToken:\nThe users id is:",req.userId,"The user's role is:",req.userRole);
//       console.log(decoded);
//       next();
//     })
//   } catch(error){
//     next(error);
//   }
// }
