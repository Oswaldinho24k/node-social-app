// const express = require('express')
// const router = express.Router()
// const passport = require('../helpers/passport')
// const User = require('../models/User')
// const welcomeMail = require('../helpers/mailer').welcomeMail


// //Signup routes
// router.get('/signup',(req, res, next)=>{
//   res.render('auth/signup')
// })

// router.post('/signup', (req, res, next)=>{
//   const {username, email} = req.body
//   User.register(req.body, req.body.password)
//     .then(user=>{
//       welcomeMail(username, email)
//       res.redirect('/login')
//     }).catch(error=>{
//       next(error)
//       res.render('auth/signup',{data:req.body,error})
//     })
// })

// //login routes

// router.get('/login', (req, res, next)=>{
//   res.render('auth/login')
// })
// router.post('/login',passport.authenticate('local'),(req, res, next)=>{
//   req.app.locals.loggedUser = req.user;
//   res.redirect(`/users/${req.user.username}`)
// })

// // router.post('/login', (req, res, next)=>{  
// //   passport.authenticate('local',(error,r )=>{
// //     if(error)return res.render('auth/login',{data:req.body,error})
// //     res.redirect('/profile')      
// //   })(req, res, next)
// // })






// router.get('/logout',(req, res, next)=>{
//   req.logOut()
//   res.redirect('/login')
// })



// module.exports = router