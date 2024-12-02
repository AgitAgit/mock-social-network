const mongoose = require("mongoose");

//need to add post count or post ids to the user, followers and following.
const userSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: false,
      unique: false,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: false,
      unique: true,
    },
    role: {
      type: String,
      required: false,
    },
    profilePic: {
      type: String,
      required: false,
    },
    savedPosts: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Post",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
