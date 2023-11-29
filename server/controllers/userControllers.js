const User = require('../models/User')

// Controlador para registrar un nuevo usuario
const signUp = async (req, res) => {
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

module.exports = { signUp }
