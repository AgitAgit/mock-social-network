import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,
  },
  authorId: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("Comment", commentSchema);
