const Comment = require("../models/commentModel.js");
const Post = require("../models/postModel.js");


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

// add toggleLike function
async function toggleCommentLike(req, res, next){
  try {
    const { commentId } = req.params;//the id of the comment to update
    //check if the user likes the comment
    let updateResult;
    let textMessage;
    const likes = await Comment.find({ "_id" : commentId }, { likedBy : { "$in": [req.user.id] } });//need to test this...
    console.log("commentsController.toggleCommentLike likes says:",likes);
    if(likes){
      textMessage = 'The user already likes this comment. The like will be removed';
      updateResult = await Comment.findOneAndUpdate(
        { '_id' : commentId },
        { $pullAll: { likedBy: req.user.id } }
      );
    }
    else {
      textMessage = 'The user will be added to the comments likes...';
      updateResult = await Comment.findOneAndUpdate(
        { '_id' : commentId },
        { $push: { likedBy: req.user.id } }
      );
    }
    res.json({ message: updateResult});
  } catch(error){
    next(error);
  }
}

module.exports = { getPostComments, addComment, toggleCommentLike };
