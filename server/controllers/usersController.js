const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/userModel.js");
const Post = require("../models/postModel.js");
const Follower = require("../models/followerModel.js");

const secretKey = "secretKey";

async function addUser(req, res, next) {
  try {
    const { displayName, username, password, email, role, profilePic } =
      req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const user = new User({
      displayName,
      username,
      password: hashedPass,
      email,
      role,
      profilePic,
    });
    const newUser = await user.save();
    res.status(201).json({ mongoMessage: newUser });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { username, password } = req.body; //extract uname and pword from the req
    if (!username || !password)
      return res
        .status(400)
        .json({ message: "username and password are required..." });
    const storedUser = await User.findOne({ username: username }); //check if the user exists and extract it from the db
    // console.log("stored user:", storedUser);
    if (!storedUser)
      return res
        .status(400)
        .json({ message: `could not find user ${username}` });
    const isValid = bcrypt.compareSync(password, storedUser.password); //use bcrypt to test if the login password matches the stored one
    if (!isValid)
      return res.status(400).json({ message: "Invalid password..." });
    const token = jwt.sign(
      //generate a jwt token with payload containing the username, userId, and user role.
      {
        user: {
          username,
          userId: storedUser._id,
          role: storedUser.role || "user",
        },
      },
      secretKey,
      { expiresIn: "1h" }
    );
    console.log("a user has logged in...");
    res
      .cookie("jwt", token, {
        //attach the jwt token to the response's cookie.
        httpOnly: false,
        secure: true, // Ensure the cookie is sent over HTTPS.(Do I need it to be true? I think we're sending http requests...)
        sameSite: "strict", // Prevent cross-site requests.(Probably depends on the CORS middleware to define the allowed origin)
        maxAge: 3600000, // Cookie lifespan of 1 hour (in milliseconds).
      })
      .status(200)
      .json({ message: `User ${username} logged in successfully.`, token });
  } catch (error) {
    next(error);
  }
}

async function getAllUsers(req, res, next) {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    next(error);
  }
}

async function getLoggedUserData(req, res, next) {
  try {
    const user = await User.findById(req.user.userId);
    const userPosts = await Post.find({ authorId: req.user.userId });
    const followers = await Follower.countDocuments({
      userId: req.user.userId,
    });
    const following = await Follower.countDocuments({
      followerId: req.user.userId,
    });
    const userPostData = userPosts.map((post) => ({
      id: post._id,
      image: post.postImageUrl,
    }));
    res.json({ user, Posts: userPostData, followers, following });
  } catch (error) {
    next(error);
  }
}

async function getSpecificUserData(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    console.log(user);
    const userPosts = await Post.find({ authorId: req.params.id });
    const followers = await Follower.countDocuments({
      userId: req.params.id,
    });
    const following = await Follower.countDocuments({
      followerId: req.params.id,
    });
    const userPostData = userPosts.map((post) => ({
      id: post._id,
      image: post.postImageUrl,
    }));
    res.json({ user, Posts: userPostData, followers, following });
  } catch (error) {
    next(error);
  }
}

async function followUser(req, res, next) {
  try {
    const follower = new Follower({
      userId: req.params.id,
      followerId: req.user.userId,
    });
    const newFollower = await follower.save();
    res.status(201).json({ mongoMessage: newFollower });
  } catch (error) {
    next(error);
  }
}

async function catchAll(err, req, res, next) {
  res.status(500).send("something went wrong in the server...");
}

module.exports = {
  addUser,
  getAllUsers,
  getLoggedUserData,
  login,
  followUser,
  getSpecificUserData,
  catchAll,
};

// export const deleteUserById = async function (req, res, next) {
//   try {
//     const reply = await User.findByIdAndDelete(req.params.id);
//     res.json({ message: "delete successful", reply });
//     next();
//   } catch (error) {
//     next(error);
//   }
// };
