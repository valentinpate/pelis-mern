require('dotenv').config()
const mongoose = require ('mongoose')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/User')
const passport = require('passport')

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

module.exports.googleStrategy = async function(passport) {passport.use("google",
  new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/google"
  },
  async function(accessToken, refreshToken, profile, cb) {
     const userGoogle = await User.findOneAndUpdate({ 
      googleId: profile.id})
      console.log('soy el profile', profile)
      return cb(null,profile)
     
  }
  ))}