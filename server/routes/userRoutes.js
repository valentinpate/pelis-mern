const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControllers')
const passport = require('passport')

router.post('/signup',userControllers.signup_post)

router.post('/signin',userControllers.signin_post)

router.get('/signin',userControllers.signin_get)

router.get('/',pelisControllers.Hero_get)

module.exports = router