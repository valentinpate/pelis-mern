const User = require('../models/User')
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
require('../config/passport')

let username = null

// Controlador para registrar un nuevo usuario
const signup_post = async (req, res) => {
  const { name, email, password } = req.body
  console.log('soy el back',name,email,password)

  try {
    
    const existeUsuario = await User.findOne({ email })// Verificar si el usuario ya existe

    if (existeUsuario) {
      return res.status(400).json({ message: 'El usuario ya existe' })
    }

    const newUser = new User({ name, email, password })
    await newUser.save()  // Crear y guardar el nuevo usuario en la base de datos

    return res.status(201).json({ message: 'Usuario creado exitosamente' })
  } catch (error) {
    return res.status(500).json({ message: 'Hubo un error al crear el usuario', error })
  }
}

const signin_post = async (req,res) =>{
  if (req.isAuthenticated()){
       username = req.user.nombre
       res.redirect('/')
  }
}



const signin_get = async (req,res) => {
  res.redirect("/")
  console.log('estoy entrando')
}

module.exports = { signup_post,signin_post, signin_get}
