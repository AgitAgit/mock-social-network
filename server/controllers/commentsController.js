import Comment from "../models/commentModel.js";
import Post from "../models/postModel.js";
import mongoose from "mongoose";

// need to add post existence validation
export async function addComment(req, res, next) {
  try {
    const { parentPostId, content, authorId } = req.body;

    const comment = new Comment({
      parentPostId,
      content,
      authorId,
    });

    const response = await comment.save();
    
    const updateResult = await Post.findOneAndUpdate({ _id: parentPostId }, { $push: { commentIds:response._id} })
    
    res.json({ message: response, message2: updateResult });
    next();
  } catch (error) {
    next(error);
  }
}
