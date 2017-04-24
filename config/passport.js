/**
 * Created by hp on 24/04/2017.
 */
var passport = require('passport');
var Usermodel = require('../models/user');
var localStrategy = require('passport-local').Strategy

passport.serializeUser(function(user, done){
    done(null, user.id)
});

passport.deserializeUser(function (id, done) {
    Usermodel.findById(id, function (err, user) {
       done(err, user);
    });
});

passport.use('local.sign-up', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallack: true
}, function (req, email, password, done) {
    Usermodel.findOne({'email ': email}, function (err, user) {
        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, {message: 'Email is already in use'});

        }
        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        newUser.save(function (err, result) {
            if (err) {
                return done(err);
            }
            return done(null, newUser);
        });
    }}));

//braces is end of function (req, email, pword, done and bracket is end of passport new localStrategy
