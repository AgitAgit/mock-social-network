const Post = require("../models/postModel.js");

//path params:none
//query params:none
//example request body: { title:"post title", content:"post content", authorId:"<mongo document id>"}
//example response: { message:<the new document generated>}
async function addPost(req, res, next) {
  try {
    const { title, content } = req.body;
    console.log(req.user);

    const post = new Post({
      title,
      content,
      authorId: req.user.userId,
    });

    const response = await post.save();
    res.json({ message: response });
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
    const posts = await Post.find()
      .populate("authorDisplayName", "displayName")
      .populate("commentAuthors", "displayName");

    res.json(posts);

    next();
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

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { addPost, getAllPosts, getPostById };
