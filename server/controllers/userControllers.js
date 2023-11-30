const User = require('../models/User')
const passport = require('passport')

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

const signin_post = passport.authenticate('local', {
  successRedirect: '/', // Ruta a la que redirigir si la autenticación es exitosa
  failureRedirect: '/signin', // Ruta a la que redirigir si la autenticación falla
  failureFlash: true, // Habilita mensajes flash para mostrar errores
})

// const signin_get = async (req,res) => {
  // res.redirect('/')
  // console.log('estoy entrando al signinGET')
// }

module.exports = { signup_post,signin_post,  }
