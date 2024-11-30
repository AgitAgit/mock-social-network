const express = require("express");

const { addPost, getAllPosts, getPostById } = require("../controllers/postsController.js");

const router = express.Router();

router.get("/", getAllPosts);

router.post("/", addPost);

router.get("/:postId", getPostById);

module.exports = router;