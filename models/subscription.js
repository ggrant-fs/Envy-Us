const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Subscribe = new Schema(
    {
        email:{type:String,required:true}
    },
    {timestamps:true}
)

module.exports = mongoose.model('subscriptions', Subscribe)