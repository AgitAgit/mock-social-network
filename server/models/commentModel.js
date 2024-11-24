import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  parentPostId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
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
