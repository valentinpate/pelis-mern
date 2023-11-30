const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControllers')
const localStrategy = require('../config/passport')

router.post('/signup',userControllers.signup_post)

router.post('/signin',userControllers.signin_post)

// router.get('/signin',userControllers.signin_get)


module.exports = router