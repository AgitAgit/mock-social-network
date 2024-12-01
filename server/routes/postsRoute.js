const express = require("express");
const { authUser } = require("../middleware/authUser.js");

const {
  addPost,
  getAllPosts,
  getPostById,
} = require("../controllers/postsController.js");

const router = express.Router();

router.get("/", getAllPosts);

router.post("/", authUser, addPost);

router.get("/:postId", getPostById);

module.exports = router;
