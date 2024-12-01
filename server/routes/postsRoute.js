const express = require("express");

const { addPost, getAllPosts, getPostById } = require("../controllers/postsController.js");
const { authUser } = require("../middleware/authUser.js");

const router = express.Router();

router.use("/", authUser);

router.get("/", getAllPosts);

router.post("/", addPost);

router.get("/:postId", getPostById);

module.exports = router;