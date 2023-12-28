require('dotenv').config()
const mongoose = require ('mongoose')
const TwitterStrategy = require('passport-twitter')
const User = require('../models/User')
const passport = require('passport')
const crypto = require('crypto')

const TWITTER_CONSUMER_KEY = process.env.TWITTER_CONSUMER_KEY
const TWITTER_CONSUMER_SECRET = process.env.TWITTER_CONSUMER_SECRET

function generatePassword() {
    return crypto.randomBytes(20).toString('hex'); // genera contraseÃ±a aleatoria, modulo que viene de node JS "CRYPTO"
}

module.exports.twitterStrategy = async function(passport){
    passport.use(new TwitterStrategy({
        consumerKey: TWITTER_CONSUMER_KEY,
        consumerSecret: TWITTER_CONSUMER_SECRET,
        callbackURL: "http://localhost:3001/auth/twitter/callback"
      },
      async function (token,tokenSecret,profile,cb){
            console.log(profile)
            let userTwitter = await User.findOne({ twitterId: profile.id });
            if (!userTwitter) {
                const blank_user = "/img/blank_user.png"
                userTwitter = new User({
                    twitterId: profile.id,
                    name: profile.username,
                    password: generatePassword(),
                    //email: profile.emails[0].value,
                    profiles: [{ image: blank_user, name: profile.displayName, myList: [] }]
                });
                await userTwitter.save();
            }
            return cb(null, userTwitter);
    }
    ));
}