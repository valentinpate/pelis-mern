const User = require('../models/User')
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
require('../config/passport')

let username = null

// Controlador para registrar un nuevo usuario
const signup_post = async (req, res) => {
  const { name, email, password } = req.body
  try {
    
    const existeUsuario = await User.findOne({ email })// Verificar si el usuario ya existe
    if (existeUsuario) {
      //return res.redirect("/signin")
      return res.status(400).json({ message: 'El usuario ya existe' })
    }

    const newUser = new User({ name, email, password })
    const blankUser = "/img/blank_user.png"
    await newUser.save()  // Crear y guardar el nuevo usuario en la base de datos
    await User.updateOne({_id:newUser._id},{$push:{profiles:{image:blankUser,name:newUser.name,myList:[]}}})
    return res.status(201).json({ message: 'Usuario creado exitosamente' })
  } catch (error) {
    return res.status(500).json({ message: 'Hubo un error al crear el usuario', error })
  }
}

const signup_get = async (req,res) =>{
       res.json({ message: 'hola todo bien' })
}

const signin_post = async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({ mensaje: 'Credenciales incorrectas' });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      username = user
      console.log("Está req autenticado??", req.isAuthenticated())
      console.log("Usuario", req.user)
      return res.status(200).json({ mensaje: 'Inicio de sesion exitoso', user });
    });
  })(req, res, next);
}


const signin_get = async (req,res) => {
  res.json({mensaje:'Inicio de sesion exitoso'})
}


const failuresignin_get = async (req,res) => {
  res.json({mensaje:'Credenciales incorrectas'})
}

const logout_get = async (req,res) => {
  req.logOut(function(err){
    if(err){
        return next(err)
    }
  })
  let message = "llego del logout_get"
  //username = null
  console.log(req.user)
  console.log("Está req autenticado?", req.isAuthenticated())
  res.json(message)
}

const get_all_profiles = async (req,res) => {
  let call = await User.findById({_id:username.id})
  let profiles = call.profiles
  res.json(profiles)
}

module.exports = { signup_post, signin_post, signin_get, signup_get, failuresignin_get, logout_get, get_all_profiles}
