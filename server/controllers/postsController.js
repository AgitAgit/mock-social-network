import Post from '../models/postModel.js';

export async function addPost(req, res, next){
    try{
        const { title, content, authorId } = req.body;
        console.log(req.body);
        
        const post = new Post({
            title,
            content,
            authorId
        });

        const response = await post.save();
        res.json({ message: response});
        next();
    } catch (error){
        next(error);
    }
}