const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const articleRoutes = require('./routes/articles')
const db = require('./db/connection')
const port =  3000

const app = express()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//middleware 
app.use(cors())
app.use(logger())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/api',articleRoutes)


app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})


