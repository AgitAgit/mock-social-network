import express from "express";

import { addPost } from "../controllers/postsController.js";

const router = express.Router();

router.get("/");

router.post("/", addPost);

router.post("/:postId");

export default router;
