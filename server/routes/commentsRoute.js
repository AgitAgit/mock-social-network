const express = require("express");
const {
  addComment,
  getPostComments,
  toggleCommentLike,
  deleteComment,
} = require("../controllers/commentsController.js");
const { authUser } = require("../middleware/authUser.js");

const router = express.Router();

router.post("/:postId", authUser, addComment);

router.get("/:postId", getPostComments);

router.post("/like/:commentId", authUser, toggleCommentLike);

router.delete("/:commentId", authUser, deleteComment);

module.exports = router;
