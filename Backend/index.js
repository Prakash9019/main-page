require('dotenv').config()
const connectDB = require('./db');
const express = require('express');
var cors=require('cors');
const model=require('./Medical');
var fs=require('fs');
const User=require("./user")
const passport=require("passport");
const passportLocalMongoose = require('passport-local-mongoose');
const session=require("express-session")
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');
//connectDB();
const app = express();
const PORT=5000;
connectDB();
app.use(cors());
app.use(express.json());

app.use(session({
    secret:"This is the secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
passport.use(User.createStrategy());
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


passport.use(new GoogleStrategy({
  clientID:process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL:"https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
app.get('/auth/google',
  passport.authenticate('google', { scope: ["profile"] }));

  

app.get("/secrets",function(req,res){
      if(req.isAuthenticated()){
        res.render("medical");
      }
      else{
        res.redirect("login")
      }
})

app.use('/api/auth',require('./routers/auth.js'));
app.use('/api/notes',require('./routers/notes'));
app.use('/api/bodytemp',require('./routers/bodytemp'));
app.use('/api/breaths',require('./routers/breaths'));
app.use('/api/bloodpre',require('./routers/bloodpressure'));
app.use('/api/medical',require('./routers/medical'));



app.get('/',(req,res)=>{
    res.send("hello surya");
})

app.listen(PORT, () => {
    console.log(`inoteBook listening at http://localhost:${PORT}`);
})