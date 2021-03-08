//require db on this line
const db = require('../db/connection')
// const { db } = require('../models/articles')
const Article= require('../models/articles')

//db.on connection 
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () =>{
    const articles =
    [
        {
            "imgUrl":"https://i.imgur.com/ZC6xloz.png",
            "catagory":"News",
            "caption":"Paris brings fashion in the spring",
            "author":"Kendra Calvin"
        },
        {
            "imgUrl":"https://i.imgur.com/lptCnWC.png",
            "catagory":"Fashion",
            "caption":"The new look in Milan for 2021",
            "author":"Donna Wright"
        },
        {
            "imgUrl":"",
            "catagory":"Fashion",
            "caption":"Chic and Vintage looks",
            "author":"Zack Donnely"
        },
        {
            "imgUrl":"https://i.imgur.com/6JaDvGg.png",
            "catagory":"Fashion",
            "caption":"The new Dulce & Gabbana line",
            "author":"Cindy Summers"
        },
        {
            "imgUrl":"https://i.imgur.com/1ZqG3Zd.png",
            "catagory":"News",
            "caption":"Did COVID kill fashion",
            "author":"Dana McCarthy "
        },
        {
            "imgUrl":"https://i.imgur.com/A0PAOpQ.png",
            "catagory":"Fashion",
            "caption":"Fashion week 2021",
            "author":"Samuel Sonders"
        },
        
    ]
    await Article.insertMany(articles)
    console.log('created articles!')
}

const run = async () =>{
    await main()
    db.close()
}

run()