const express = require("express");

const {
  addPost,
  getAllPosts,
  getPostById,
  likePost,
  savePost,
} = require("../controllers/postsController.js");
const { authUser } = require("../middleware/authUser.js");

const router = express.Router();

router.use("/", authUser);

router.get("/", getAllPosts);

router.post("/", addPost);

router.get("/:postId", getPostById);

router.post("/posts/:postId/like", likePost);

router.post("/posts/:postId/save", savePost);

module.exports = router;
