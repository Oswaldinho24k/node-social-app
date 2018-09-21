// const express = require('express')
// const router = express.Router()
// const User = require('../models/User')
// const uploadCloud = require('../helpers/cloudinary')
// const Post = require('../models/Post')


// //profile
// router.get('/:username',(req, res, next)=>{
//   const {username} = req.params
  
//   User.findOne({username})
//     .then(user=>{
//       Post.find({userId:user._id}).sort('-created_at').populate('userId')
//         .then(posts=>{
//           let owner = false
//           if(user._id==req.user._id) owner=true      
//           res.render('users/profile',{posts:posts,user,owner:owner})
//         }).catch(e=>{
//           res.redirect('/')
//         })
      
//     }).catch(error=>{
//       res.redirect('/')
//     })
// })
// //edit profile
// // router.get('/:username/edit',(req, res, next)=>{
// //   User.findById(req.user._id)
// //     .then(user=>{
// //       res.render('auth/edit',user)
// //     }).catch(error=>{
// //       res.redirect('/profile')
// //     })
// // })

// router.post('/:username',uploadCloud.single('image'),(req, res, next)=>{
//   if(req.file)req.body['photoURL']=req.file.url
//   User.findByIdAndUpdate(req.user._id,{$set:req.body},{new:true})
//     .then(user=>{
//       res.redirect(`/users/${user.username}`)
//     }).catch(error=>{
//       res.redirect('/profile')
//     })
// })


// module.exports = router