import express from "express";

import { addPost, getAllPosts, getPostById } from "../controllers/postsController.js";

const router = express.Router();

router.get("/", getAllPosts);

router.post("/", addPost);

router.get("/:postId", getPostById);

export default router;
