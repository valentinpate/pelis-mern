require('../config/passport')
require('../config/google')
const passport = require('passport')

const google_get = passport.authenticate('google', { scope: ['profile', 'email' , 'name'] })

const google_callback_get = passport.authenticate('google', { failureRedirect: '/signin' })

module.exports = { google_get, google_callback_get }



