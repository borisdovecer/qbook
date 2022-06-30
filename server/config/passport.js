const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const User = require('../models/userModel');

module.exports = function(passport) {
    passport.serializeUser(function (user, done) {
        done(null, user)
    });
    passport.deserializeUser(function (user, done) {
        done(null, user)
    });

    passport.use(new LocalStrategy('local-strategy', (username, password, done) => {
        User.findOne({ username: username }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    return done(null, {
                        id: user._id,
                        name: user.name,
                        role: user.role
                    });
                } else {
                    return done(null, false);
                }
            });

        })
    }))
};
