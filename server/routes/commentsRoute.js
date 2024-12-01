import express from "express";
import {
  addComment,
  getPostComments,
} from "../controllers/commentsController.js";

const router = express.Router();

router.get("/posts/:postId", getPostComments);

router.post("/", addComment);

export default router;
