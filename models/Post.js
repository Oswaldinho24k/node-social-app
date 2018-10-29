const mongoose = require('mongoose')
const Schema = mongoose.Schema



const postSchema = new Schema({
  text:String,
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  photoURL:String
},{
  timestamps:{
    updatedAt:"updated_at",
    createdAt:"created_at"
  }
})
/*


:O justo lo quye utilizo en allende
*/

module.exports = mongoose.model('Post', postSchema)