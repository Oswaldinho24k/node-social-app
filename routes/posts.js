// const router = require('express').Router()
// const Post = require('../models/Post')
// const uploadCloud = require('../helpers/cloudinary')


// router.get('/',(req, res, next)=>{
//   Post.find().populate('user').sort('-created_at')
//     .then(posts=>{
//       console.log(posts)
//       res.render('posts/list',{posts,user:req.user})
//     }).catch(e=>{
//       console.log(e)
//     })
// })

// router.post('/',uploadCloud.single('image'),(req, res, next)=>{
//   if(req.file)req.body['photoURL']=req.file.url
//   req.body['user']=req.user._id
//   Post.create(req.body)
//     .then(post=>{
//       res.redirect('/posts')
//     }).catch(e=>{
//       console.log(e)
//     })
// })

// module.exports = router