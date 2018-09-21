const mongoose = require('mongoose')
const Schema = mongoose.Schema


const commentSchema = new Schema({
  post:{
    type:Schema.Types.ObjectId,
    ref:'Post'
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  text:String
},{
  timestamps:{
    updatedAt:"updated_at",
    createdAt:"created_at"
  }
})

module.exports = mongoose.model('Comment', commentSchema)