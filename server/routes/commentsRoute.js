const express = require("express");
const {
  addComment,
  getPostComments,
} = require("../controllers/commentsController.js");

const router = express.Router();

router.get("/posts/:postId", getPostComments);

router.post("/", addComment);

module.exports = router;