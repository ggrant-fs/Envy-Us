const db = require('../db/connection')

const Article= require('../models/articles')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))
//

const main = async () =>{
    
    const articles =
    [
        {
            "imgUrl":"https://i.imgur.com/ZC6xloz.png",
            "category":"News",
            "caption":"Hello world !",
            "author":"Kendra Calvin"
        },
        {
            "imgUrl":"https://i.imgur.com/lptCnWC.png",
            "category":"Fashion",
            "caption":"The new look in Milan for 2021",
            "author":"Donna Wright"
        },
        {
            "imgUrl":"https://i.imgur.com/6JaDvGg.png",
            "category":"Fashion",
            "caption":"The new Dulce & Gabbana line",
            "author":"Cindy Summers"
        },
        {
            "imgUrl":"https://i.imgur.com/1ZqG3Zd.png",
            "category":"News",
            "caption":"Did COVID kill fashion",
            "author":"Dana McCarthy "
        },
        {
            "imgUrl":"https://i.imgur.com/A0PAOpQ.png",
            "category":"Fashion",
            "caption":"Fashion week 2021",
            "author":"Samuel Sonders"
        }
        
    ]
   await Article.insertMany(articles)
    console.log('created articles!')
}

//closes the connection
const run = async () =>{
    await main()
    db.close()
}

run()

