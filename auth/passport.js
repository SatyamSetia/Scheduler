const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const googleClientID = require('../keys').googleClientID;
const googleClientSecret = require('../keys').googleClientSecret;

module.exports = (passport) => {
	passport.serializeUser((user, done) => {
		done(null, user);
	})

	passport.deserializeUser((user, done) => {
		done(null, user);
	})

	passport.use(new GoogleStrategy({
		clientID: googleClientID,
		clientSecret: googleClientSecret,
		callbackURL: "/auth/google/callback"
	}, (token, refreshToken, profile, done) => {
		return done(null,{
			profile: profile,
			token: token
		});
	}))
}