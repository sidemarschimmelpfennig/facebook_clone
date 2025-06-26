const Post = require ("../models/Post");
class PostController {
    async index(req, res){
        const allPosts = await Post.findAll({
            order:[['id', 'DESC']]
        })
        const formatPosts = []

        allPosts.forEach((post)=>{
            formatPosts.push(            
            {
            id: post.id,
            avatar: "https://cdn.quasar.dev/img/avatar.png",
            name: "João Pedro",
            time:  post.createdAt,
            text: post.text,
            url: post.picture,
            likes: 100,
            comments: 6,
            shared: 4,
            }
        )
        })
        return res.json(formatPosts)
    }
    async store (req, res){
        const insertPost = await   Post.create( req.body );

        const formatPost = {
            id: insertPost.id,
            avatar: "https://cdn.quasar.dev/img/avatar.png",
            name: "João Pedro",
            time: insertPost.createdAt,
            text: insertPost.text,
            url: insertPost.picture,
            likes: 100,
            comments: 6,
            shared: 4,
        }

        return res.status(200).json(formatPost)
    }

    async upload(req, res){
        const  {filename}  = req.file

        return res.send({image: `uploads/${filename}`})
    }
}

module.exports = new PostController()