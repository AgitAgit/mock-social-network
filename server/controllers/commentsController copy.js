import Comment from "../models/commentModel.js";

// need to add post existence validation
export async function addComment(req, res, next) {
  try {
    const { parentPostId, content, authorId } = req.body;
    console.log(req.body);

    const comment = new Comment({
      parentPostId,
      content,
      authorId,
    });

    const response = await comment.save();
    res.json({ message: response });
    next();
  } catch (error) {
    next(error);
  }
}
