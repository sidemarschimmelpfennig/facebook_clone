const { Router } = require("express");

const routes = new Router();

routes.get('/', (req, res)=>{
    res.send("Bem vindo a api")
} )



routes.get('/api', (req, res)=>{
    res.send("Bem vindo a api")
} )



module.exports = routes;