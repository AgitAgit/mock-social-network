import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref:"User",
    required: true
  },
  commentIds: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Comment",
    required: false
  } ]
});

export default mongoose.model("Post", postSchema);
