const mongoose = require('mongoose')
const Schema = mongoose.Schema
const plm = require('passport-local-mongoose')


const userSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    email:String,
    photoURL:String,
    followers:[Schema.Types.ObjectId],
    following:[Schema.Types.ObjectId]
},{
    timestamp:{
        updatedAt:"updated_at",
        createdAt:"created_at"
    }
})

userSchema.plugin(plm, {usernameField:'email'})
module.exports = mongoose.model('User', userSchema)