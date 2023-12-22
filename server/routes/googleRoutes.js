const express = require('express')
const router = express.Router()
const passport =  require ('passport')

router.get('/google/user', (req, res) => {
    if (req.user) {
      res.json({ user: req.user });
    } else {
      res.status(401).json({ error: 'Not authenticated' });
    }
  })


router.get('/google', passport.authenticate('google', {scope : ['profile', 'email']}))

router.get('/google/callback',
 passport.authenticate('google', 
  { successRedirect:'http://localhost:3000/',
    failureRedirect: '/signin' }), (req,res) => {
        console.log('en el back', req.user)
        res.json({ user : req.user})
    }
);


module.exports = router