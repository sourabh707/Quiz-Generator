const express = require('express')
const path = require('path')
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var morgan = require("morgan");
//importing firebase
var firebase = require("firebase/app");
const { format } = require('path');
require("firebase/firestore");
require("firebase/app");
const router = express.Router()

const session_time = 1000 * 60 * 60 * 24 * 1;

var firebaseConfig = {
  apiKey: "AIzaSyDD6ZpbrX17ySGVrH8w0wYDqvGyMXYnPlo",
  authDomain: "kritika-a12ae.firebaseapp.com",
  projectId: "kritika-a12ae",
  storageBucket: "kritika-a12ae.appspot.com",
  messagingSenderId: "1074719455050",
  appId: "1:1074719455050:web:42703119681390e56033b3",
  measurementId: "G-T7X5WRL1GS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

//retrieve
var user_n, pass, users = [{ id: null, name: null, password: null }];
var docRef = db.collection('admin').doc('password').collection('credentials').onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    user_n = doc.data().username,
      pass = doc.data().password;
    console.log(user_n, pass);
    users[0].id = 1;
    users[0].name = user_n;
    users[0].password = pass;
  });
});

// var docRef=db.collection('admin').doc('D3yNdD3ohBc0SmNQYuNK').collection('credentials').onSnapshot((querySnapshot)=>{
//   querySnapshot.forEach((doc) => {
//   user_n = doc.data().username,
//      pass = doc.data().password;
//      console.log(user_n,pass);
//    users[0].id=1;
//  users[0].name=user_n;
//  users[0].password=pass;
// });});


//putting




router.use(morgan("dev"));

router.use(bodyParser.urlencoded({ extended: true }));


router.use(cookieParser());

router.use(
  session({
    name: 'sid',
    resave: false,
    saveUninitialized: false,
    secret: 'sid_the_sloth',
    cookie: {
      maxAge: session_time,
      sameSite: true,
      secure: false,
    },

  })
);

const redirectLogin = (req, res, next) => {
  if (!req.session.userId)
    res.redirect("/")

  else
    next();

}

const redirectHome = (req, res, next) => {
  if (req.session.userId)
    res.redirect("/form")

  else
    next();

}

router.get('/', redirectHome, (req, res) => {
  const { userId } = req.session;
  console.log(req.session);
  if (userId)
    window.location.href = "/form";
  else
    res.render('data', {
      style: 'data.css'
    });
})

router.get('/form', redirectLogin, (req, res) => {
  res.render('form', {
    style: 'form.css',
  });
})
router.get('/newForm', redirectLogin, (req, res) => {
  res.render('createNew', {
    style: 'newForm.css'
  });
})
router.get('/userForm', (req, res) => {
  res.render('user_form', {
    style: 'newForm.css'
  });
})
router.get('/response', (req, res) => {
  res.render('response', {
    style: 'newForm.css'
  });
})





router.post('/', redirectHome, (req, res) => {
  const { name, password } = req.body;
  console.log(name, password);
  if (name && password) {
    console.log(name, password);
    const user = users.find(user => user.name === name && user.password === password)
    if (user) {
      req.session.userId = user.id;
      res.redirect('/form');
    }
    else
      res.redirect('/');
  }

})
router.post('/logout', redirectLogin, (req, res) => {
  req.session.destroy(err => {
    if (err)//error destroying cookie
      return res.redirect('/');
    res.clearCookie('sid');
    res.redirect('/');
  })


})





module.exports = router