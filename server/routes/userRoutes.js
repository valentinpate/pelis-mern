const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControllers')
const passport = require('passport')
require('../config/passport')


router.post('/signup',userControllers.signup_post)

router.get('/signup',userControllers.signup_get)

router.post('/signin',userControllers.signin_post)    

router.get('/logout',userControllers.logout_get)

router.get("/profiles",userControllers.get_all_profiles)

router.post("/createProfile",userControllers.create_profile)

module.exports = router