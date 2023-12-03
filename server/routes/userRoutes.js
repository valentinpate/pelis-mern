const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControllers')
const pelisControllers = require('../controllers/pelisControllers')
const passport = require('passport')
require('../config/passport')
const localStrategy = require('passport-local').Strategy


router.post('/signup',userControllers.signup_post)

router.post('/signin',passport.authenticate('local', {
    successRedirect: '/', // Ruta a la que redirigir si la autenticación es exitosa
    failureRedirect: '/signin', // Ruta a la que redirigir si la autenticación falla
    failureFlash: true, // Habilita mensajes flash para mostrar errores
  }), userControllers.signin_post)

router.get('/signin',userControllers.signin_get)


module.exports = router