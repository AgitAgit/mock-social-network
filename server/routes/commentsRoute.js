const express = require("express");
const {
  addComment,
  getPostComments,
  toggleCommentLike
} = require("../controllers/commentsController.js");
const { authUser } = require("../middleware/authUser.js");

const router = express.Router();

router.use("/", authUser);

router.get("/:postId", getPostComments);

router.post("/", addComment);

router.post("/like/:commentId", toggleCommentLike);

module.exports = router;
