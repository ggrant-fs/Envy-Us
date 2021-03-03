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
            "author":""
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":""
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":""
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":""
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":""
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":""
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":""
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":""
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":""
        },
        {
            "imgUrl":"",
            "catagory":"",
            "caption":"",
            "author":""
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