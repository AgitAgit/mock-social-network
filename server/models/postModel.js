const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

// Virtual for author display name
postSchema.virtual("authorDisplayName", {
  ref: "User", // The model to use
  localField: "authorId", // Field in Post
  foreignField: "_id", // Field in User
  justOne: true, // Return a single user
});

// Virtual for comment authors' display names
postSchema.virtual("commentDetails", {
  ref: "Comment",
  localField: "commentIds",
  foreignField: "_id",
  justOne: false,
  options: {
    populate: {
      path: "authorId",
      select: "displayName",
    },
    populate: {
      path: "commentIds",
      select: "content",
    },
  },
});

// Ensure virtuals are included in JSON and object outputs
postSchema.set("toObject", { virtuals: true });
postSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Post", postSchema);
