import Comment from "../models/commentModel.js";
import Post from "../models/postModel.js";

// need to add post existence validation
export async function getPostComments(req, res, next) {
  try {
    const postId = req.params.postId;
    const comments = await Comment.find({ parentPostId: postId });

    res.json({ postId: postId, comments: comments });
    next(error);
  } catch (error) {
    next(error);
  }
}

export async function addComment(req, res, next) {
  try {
    const { parentPostId, content, authorId } = req.body;

    const comment = new Comment({
      parentPostId,
      content,
      authorId,
    });

    const response = await comment.save();

    const updateResult = await Post.findOneAndUpdate(
      { _id: parentPostId },
      { $push: { commentIds: response._id } }
    );

    res.json({ message: response, message2: updateResult });
    next();
  } catch (error) {
    next(error);
  }
}
