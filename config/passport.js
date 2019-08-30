var passport = require('passport');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  
  function(accessToken, refreshToken, profile, cb) {
      // a user has logged in via OAuth!
      User.findOne({ 'googleId': profile.id }, function(err, user) {
        if (err) return cb(err);
        if (user) {
          } else {
            // we have a new user via OAuth!
            var newUser = new User({
              name: profile.displayName,
              email: profile.emails[0].value,
              googleId: profile.id
            });
            newUser.save(function(err) {
              if (err) return cb(err);
              return cb(null, newUser);
            });
          }
        });
      }
    ));
    
    passport.serializeUser(function(user, cb) {
      cb(null, user.id);
    });
    
    passport.deserializeUser(function(id, cb) {
      User.findById(id, function(err, user) {
        cb(err, user);
      });
    });
 