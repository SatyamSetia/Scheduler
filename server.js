const express = require('express');
const passport = require('passport');
const auth = require('./auth/passport');
const app = express();

auth(passport);
app.use(passport.initialize());

require('./routes/authRoutes')(app);

app.listen(8080, function() {
	console.log('listening to localhost:8080');
})