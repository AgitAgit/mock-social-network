import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  parentPostId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
});

export default mongoose.model("Comment", commentSchema);
