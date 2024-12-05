const express = require("express");

const {
  addPost,
  getAllPosts,
  getPostById,
  likePost: toggleLikePost,
  savePost,
} = require("../controllers/postsController.js");
const { authUser } = require("../middleware/authUser.js");

const router = express.Router();

router.use("/", authUser);

router.get("/", getAllPosts);

router.get("/:postId", getPostById);

router.post("/", addPost);

router.post("/:postId/like", toggleLikePost);

router.post("/:postId/save", savePost);

module.exports = router;
