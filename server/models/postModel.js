const mongoose = require("mongoose");

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
    ref: "User",
    required: true,
  },
  commentIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      required: false,
    },
  ],
});

// Virtual for author display name
postSchema.virtual("authorDisplayName", {
  ref: "User", // The model to use
  localField: "authorId", // Field in Post
  foreignField: "displayName", // Field in User
  justOne: true, // Return a single user
});

// Virtual for comment authors' display names
postSchema.virtual("commentAuthors", {
  ref: "Comment",
  localField: "commentIds",
  foreignField: "_id",
  justOne: false,
});

// Ensure virtuals are included in JSON and object outputs
postSchema.set("toObject", { virtuals: true });
postSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Post", postSchema);
