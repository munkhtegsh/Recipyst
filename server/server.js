require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const app = express();

// massive_____________________________________
massive(process.env.SERVER_SCRIPT).then(db => {
  app.set('db', db);
});

// session_____________________________________
app.use(bodyParser.json());
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.SECRET_SESSION,
}));

// Auth0_______________________________________
app.use(passport.initialize());
app.use(passport.session());
const { domain, clientID, clientSecret, callbackURL } = process.env;
passport.use(new Auth0Strategy({
    domain,
    clientID,
    clientSecret,
    callbackURL, //when failure happens,
  }, (accessToken, refreshToken, extraParams, profile, done) => {
    // check user exists in the table
    app.get('db').findUser([profile.id]).then(userInfo => {
      if (!userInfo[0]) {
        app.get('db').createUser([profile.displayName, profile.id, profile.picture]).then(user => {
          console.log(user)
          return done(null, user[0].id);
          console.log()
        });
      } else {
        return done(null, userInfo[0].id)
      }
    })
  } 
));

passport.serializeUser((id, done) => {
  done(null, id);
});

passport.deserializeUser((id, done) => {
  console.log(id);
  done(null, id);
});

app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3000/#/home',
  failureRedirect: 'http://localhost:3000/'
}));

// Login
app.get('/auth', passport.authenticate('auth0'));

// Logout
app.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect('http://localhost:3000/')
})




// app.get('/api/weekly/:id', (req, res) => {
  
// })

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is up on: ${PORT}`));


