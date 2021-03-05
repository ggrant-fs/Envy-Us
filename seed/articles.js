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
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":"Kendra Calvin"
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":"Donna Wright"
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":"Zack Donnely"
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":"Cindy Summers"
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":"Dana Givens "
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":"Samuel Sonders"
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":"Alex Dunn"
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":"Jenny House"
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":"Patrick Conn"
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":"Guy McDonald"
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":""
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