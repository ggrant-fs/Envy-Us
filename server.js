const express = require('express')
const cors = require('cors')
const db = require('./db/connection')
const articles = require('./routes/articles')
const PORT =  process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api',articles)


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
})
