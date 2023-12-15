// require('../config/passport')
// require('../config/google')
// const passport = require('passport')
// const User = require('../models/User')

// const google_get = (req,res) => {

// }

// const googleCallback = async (req, res, next) => {
//     const { id, displayName, emails, photos } = req.user;
  
//     try {
//       let user = await User.findOne({ googleId: id });
  
//       if (!user) {
//         user = await User.create({
//           googleId: id,
//           name: displayName,
//           email: emails[0].value,
//           profiles: [{ image: photos[0].value, name: displayName, myList: [] }]
//         });
//       }
  
//       req.logIn(user, function(err) {
//         if (err) { return next(err); }
//         return res.redirect('/');
//       });
//     } catch (err) {
//       next(err);
//     }
//   };

// module.exports = { google_get, googleCallback }



