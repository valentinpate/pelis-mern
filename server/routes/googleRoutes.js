const express = require('express')
const router = express.Router()
const googleControllers = require('../controllers/googleControllers')
const passport =  ('passport')

router.get('/google', (req,res) => {res.send(req.user), console.log('soy el req.user', req.user)})

// router.get('/google', passport.authenticate("google", {
//     scope : ["https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/userinfo.profile"]
//   }));
  
//   router.get('/google/callback', googleControllers.googleCallback);


module.exports = router