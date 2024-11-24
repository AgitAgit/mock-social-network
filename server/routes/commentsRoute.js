import express from "express";
import { addComment } from "../controllers/commentsController.js";

const router = express.Router();

router.get("/post/:postId");

router.post("/", addComment);

export default router;
