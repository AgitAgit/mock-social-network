const Comment = require("../models/commentModel.js");
const Post = require("../models/postModel.js");

// add toggleLike function

//path params:postId
//query params:none
//example request body:none
/*example response: { {
    "postId": *entered post id*,
    "comments": [*selected post comments*]
}}*/
async function getPostComments(req, res, next) {
  try {
    const postId = req.params.postId;
    const comments = await Comment.find({ parentPostId: postId });

    res.json({ postId: postId, comments: comments });
  } catch (error) {
    next(error);
  }
}

//path params:none
//query params:none
/*example request body:{ 
      "parentPostId":"674444e4810707ebc8505bb2",
      "content": "test3",
      "authorId":"67432e35d9cabb6b21047e40"
}*/
/*example response:{
    "yourComment": {
        "parentPostId": "674444e4810707ebc8505bb2",
        "content": "test3",
        "authorId": "67432e35d9cabb6b21047e40",
        "_id": "674466c3ab88a86725c6c0a8",
        "__v": 0
    },
    "parentPost":*post data*
}*/
async function addComment(req, res, next) {
  try {
    const { parentPostId, content } = req.body;

    const comment = new Comment({
      parentPostId,
      commentContent: content,
      authorId: req.user.userId,
    });

    const response = await comment.save();

    const updateResult = await Post.findOneAndUpdate(
      { _id: parentPostId },
      { $push: { commentIds: response._id } }
    );

    res.json({ yourComment: response, parentPost: updateResult });
  } catch (error) {
    next(error);
  }
}

module.exports = { getPostComments, addComment };
