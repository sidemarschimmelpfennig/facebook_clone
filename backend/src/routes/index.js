const { Router } = require("express");
const routes = new Router();
const PostController = require("../app/controllers/PostController")
const multer = require("multer")
const {v4} = require("uuid")

const upload = multer({
    storage:multer.diskStorage({
        destination: "uploads/",
        filename(req, file, callback){
            const filename = `${v4()}-${file.originalname}`;   

            return callback(null, filename)
        }    
    })
})

routes.post('/post', PostController.store)
routes.get('/post', PostController.index)
routes.put('/upload', upload.single('image'), PostController.upload )





routes.get('/', (req, res)=>{
    res.send("Bem vindo a api")
} )



module.exports = routes;