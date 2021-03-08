const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const articleRoutes = require('./routes/articles')
const db = require('./db/connection')
const PORT =  process.env.PORT || 3005

const app = express()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//middleware 
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/api',articleRoutes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
})


