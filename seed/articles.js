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
            "catagory":"News",
            "caption":"Paris brings fashion in the spring",
            "author":"Kendra Calvin"
        },
        {
            "imgUrl":"",
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
            "imgUrl":"",
            "catagory":"Fashion",
            "caption":"The new Dulce & Gabbana line",
            "author":"Cindy Summers"
        },
        {
            "imgUrl":"",
            "catagory":"News",
            "caption":"Did COVID kill fashion",
            "author":"Dana Givens "
        },
        {
            "imgUrl":"",
            "catagory":"Fashion",
            "caption":"Fashion week 2021",
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