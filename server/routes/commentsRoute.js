const express = require("express");
const {
  addComment,
  getPostComments,
} = require("../controllers/commentsController.js");
const { authUser } = require("../middleware/authUser.js");

const router = express.Router();

router.use("/", authUser);

router.get("/:postId", getPostComments);

router.post("/", addComment);

module.exports = router;
