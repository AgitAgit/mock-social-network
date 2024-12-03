const Post = require("../models/postModel.js");

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

async function likePost(req, res, next) {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.likedBy.includes(req.user.userId)) {
      return res.status(400).json({ message: "You already liked this post" });
    }

    post.likedBy.push(req.user.userId);
    const updatedPost = await post.save();

    res.json({ message: "Post liked successfully", post: updatedPost });
  } catch (error) {
    next(error);
  }
}

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
    const updatedUser = await user.save();

    res.json({ message: "Post saved successfully", post: updatedUser });
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
    // Fetch posts with required fields
    const posts = await Post.find()
      .populate({
        path: "commentIds",
        populate: { path: "authorId", select: "username profilePic" },
      })
      .populate("authorId", "username profilePic");

    // Fetch likes count for each post
    const postsWithLikes = await Promise.all(
      posts.map(async (post) => {
        const likesCount = await Like.countDocuments({ postId: post._id });
        return {
          ...post.toObject(),
          likesCount,
        };
      })
    );

    res.json(postsWithLikes);
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
    const post = await Post.findById(postId);

    await post.populate("commentIds");

    res.json({ post: post });
  } catch (error) {
    next(error);
  }
}

module.exports = { addPost, getAllPosts, getPostById, likePost, savePost };
