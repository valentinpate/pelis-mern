const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

passport.use(new LocalStrategy({
    usernameField: 'email', // Campo del formulario que contiene el email
    passwordField: 'password', // Campo del formulario que contiene la contraseña
  },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
  
        if (!user) {
          return done(null, false, { message: 'Usuario no encontrado' });
        }
  
        const isPasswordValid = await user.isValidPassword(password);
  
        if (!isPasswordValid) {
          return done(null, false, { message: 'Contraseña incorrecta' });
        }
  
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  ));
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  })

  module.exports = passport