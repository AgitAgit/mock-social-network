import Post from '../models/postModel.js';

//path params:none
//query params:none
//example request body: { title:"post title", content:"post content", authorId:"<mongo document id>"}
//example response: { message:<the new document generated>}
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

//path params:none
//query params:none
//example request body:none
//example response: [{...post},{...post},{...post},...]
export async function getAllPosts(req, res, next){
    try{
        const posts = await Post.find();

        res.json(posts);

        next();
    } catch(error){
        next(error);
    }
}


//path params: /:postId
//query params:none
//example request body:none
//example response: { post:post }
export async function getPostById(req, res, next){
    try{
        const { postId } = req.params;
        const post = await Post.findById(postId);

        await post.populate('commentIds');

        res.json({ post:post });

        next();
    } catch(error){
        next(error);
    }
}