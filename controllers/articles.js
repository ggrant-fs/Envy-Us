const Article = require('../models/articles')
//require db connection  here

//db.on connection here

//this get all articles
const getArticles = async(req,res) =>{
    try {
        const articles = await Article.find()
        res.json(articles)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

//get single article
const getArticle = async(req,res) =>{
    try {
        const {id} = req.params
        const article = await Article.findById(id)
        //if the article exist return it otherwise 
        //return a 404
        if(article){
           return res.json(article)
        }
        res.status(404).json({message:'article not found'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    getArticle,
    getArticles
}