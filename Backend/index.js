require('dotenv').config()
const connectDB = require('./db');
const express = require('express');
var cors=require('cors');
const model=require('./Medical');
const nodemailer = require('nodemailer');
const NodeCache = require('node-cache');
const crypto = require('crypto');
const cache = new NodeCache();
var fs=require('fs');
const User=require("./user")
const passport=require("passport");
const passportLocalMongoose = require('passport-local-mongoose');
const session=require("express-session")
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');
const http=require('http');
//connectDB();
const app = express();
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);
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


//nodemailer

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASSWORD
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.get("/otprequest", async (req, res) => {
  try {
    const {email} =req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log(existingUser);
      return res.json({ message: 'User already exists' });
    }

    const otp = crypto.randomInt(100000, 999999);
    console.log(otp.toString());
    cache.set(email, otp.toString());
    console.log(otp);

    const mailOptions = {
      from: process.env.MAIL,
      to: email,
      subject: 'Email Confirmation OTP for AUCTION',
      text: `Your OTP for email confirmation is: ${otp}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }

      console.log('Email sent:', info);
      return res.status(201).json({ message: info });
    });
  } catch (error) {
    console.error('Error during OTP request:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//sucess

app.post("/success", async (req, res) => {
  const { email, fullname } = req.body;
  const mailOptions = {
    from: process.env.MAIL,
    to: email,
    subject: 'Successfully Registered for AUCTION',
    text: `Dear ${fullname},
  
      you succesfully registered
      `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }

    console.log('Email sent:', info);
    return res.status(201).json({ message: 'Email sent successfully' });
  });
})




//socket conection
// const socket=io();
// io.on('connection', (socket) => {
//   console.log('a user connected');
// });





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