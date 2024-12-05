const Post = require("../models/postModel.js");
const User = require("../models/userModel.js");

//path params:none
//query params:none
//example request body: { title:"post title", content:"post content", authorId:"<mongo document id>"}
//example response: { message:<the new document generated>}
async function addPost(req, res, next) {
  try {
    const { title, content, postImageUrl } = req.body;

    const post = new Post({
      title,
      content,
      postImageUrl,
      authorId: req.user.userId,
    });

    const response = await post.save();
    res.json({ message: response });
  } catch (error) {
    next(error);
  }
}

// change to toggleLikePost?
async function toggleLikePost(req, res, next) {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (post.likedBy.includes(req.user.userId)) {
      post.likedBy.pull(req.user.userId);
      const updatedPost = await post.save();
      res.json({
        message: "You already liked this post. Like will be removed.",
        updatedPost,
      });
    } else {
      post.likedBy.push(req.user.userId);
      const updatedPost = await post.save(); // change to find and update
      res.json({ message: "Post liked successfully", post: updatedPost });
    }
  } catch (error) {
    next(error);
  }
}

// change to toggleSavePost?
async function savePost(req, res, next) {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);

    const user = await User.findById(req.user.userId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (user.savedPosts.includes(postId)) {
      return res.status(400).json({ message: "You already saved this post" });
    }

    user.savedPosts.push(postId);
    const updatedUser = await user.save(); // change to find and update

    res.json({ message: "Post saved successfully", user: updatedUser });
  } catch (error) {
    next(error);
  }
}

//path params:none
//query params:none
//example request body:none
//example response: [{...post},{...post},{...post},...]

async function getAllPosts(req, res, next) {
  try {
    const limit = req.query.limit || 3;
    const offset = req.query.offset || 0;

    const posts = await Post.find()
      .skip(offset)
      .limit(limit)
      .populate({
        path: "commentIds",
        populate: { path: "authorId", select: "username profilePic" },
      })
      .populate("authorId", "username profilePic");

    res.json(posts);
  } catch (error) {
    next(error);
  }
}

//path params: /:postId
//query params:none
//example request body:none
//example response: { post:post }
async function getPostById(req, res, next) {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId).populate("authorId", "username");

    await post.populate("commentIds");

    res.json({ post: post });
  } catch (error) {
    next(error);
  }
}

async function deletePost(req, res, next) {
  try {
    const { postId } = req.params;
    const result = await Post.deleteOne({ _id: postId });
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addPost,
  getAllPosts,
  getPostById,
  likePost: toggleLikePost,
  savePost,
  deletePost,
};
