const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Article = new Schema(
    {
        imgUrl: {type:String, required:true},
        category:{type:String,required:true},
        caption:{type:String,required:true},
        author:{type:String,required:true}
    },
    {timestamps:true}
)

module.exports = mongoose.model('articles',Article)