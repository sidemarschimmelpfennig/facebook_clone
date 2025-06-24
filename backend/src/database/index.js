const Sequelize = require("sequelize")
const Post = require('../app/models/Post')


const models =[Post]
const dataBaseConfig = require("../config/database")



class Database {
    constructor(){
        this.init();
    }
    init(){
        this.connection = new Sequelize(dataBaseConfig);
        models.map((model)=> model.init(this.connection))
    }
}

module.exports = new Database()