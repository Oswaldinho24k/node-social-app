const mongoose = require('mongoose')
const Schema = mongoose.Schema



const postSchema = new Schema({
  text:String,
  userId:Schema.Types.ObjectId,
  photoURL:String
},{
  timestamps:{
    updatedAt:"updated_at",
    createdAt:"created_at"
  }
})

module.exports = mongoose.model('Post', postSchema)