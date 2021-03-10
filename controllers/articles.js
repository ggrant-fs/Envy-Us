const Articles = require('../models/articles')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//routes go below

const getArticles = async(req,res) =>{
    try {
        const articles = await Articles.find()
        res.json(articles)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const getArticle = async (req,res) =>{
    try {
        const {id} = req.params
        const article = await Articles.findById(id)
        if(article){
            return res.json(article)
        }
        res.status(404).json({error:error.message})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    getArticle,
    getArticles
}