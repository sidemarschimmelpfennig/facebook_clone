const Post = require ("../models/Post");

class PostController {
    async index(req, res){
        const allPosts = await Post.findAll()

        return res.json(allPosts)
    }
    async store (req, res){
        const insertPost = await   Post.create( req.body );

        return res.status(200).json(insertPost)
    }

    async upload(req, res){
        const  {filename}  = req.file

        return res.send({image: `uploads/${filename}`})
    }
}

module.exports = new PostController()