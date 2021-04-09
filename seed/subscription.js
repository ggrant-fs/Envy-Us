const db = require('../db/connection')
const Subscribe = require('../models/subscription')

//db() Create a new Db instance.
//db.on() Establish connection to db
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () =>{
    
    const subscribe = 
    [
       {
           "email":"carlloyed69@gmail.com"
       },
       {
           "email":"ladyjazmin1@gmail.com"
       },
       {
           "email":"d.dallas@gmail.com"
       },
       {
           "email":"martha1970@gmail.com"
       },
       {
           "email":"clavinjackson1717@gmail.com"
       },
       {
           "email":"caliclub@gmail.com"
       },
       {
           "email":"bobtheplummer@gmail.com"
       },
       {
           "email":"carryjackson4520@gmail.com"
       },
       {
           "email":"foxyroxy@gmail.com"
       },
       {
           "email":"scottmathews-9@gmail.com"
       },
       {
           "email":"georgelevybct@gmail.com"
       },
       {
           "email":"JohnnysBurgers@gmail.com"
       },
       {
           "email":"a_austin@gmail.com"
       },
    ]
    await Subscribe.insertMany(subscribe)
    console.log('created subscriptions')
}

const run = async () =>{
    await main()
//db.close(): Closes the current db connection, 
//including all the child db instances.
// Emits close event and calls optional callback
    db.close()
}

run()