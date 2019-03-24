/*
 * 28 Feb 2019
 */

//requiring the modules
const request = require('request'); 
const express = require('express');
const bodyParser = require('body-parser'); 
const session = require('express-session');
var cookieParser = require('cookie-parser');


//requiring the routes
const admin = require('./routes/admin');
const user = require('./routes/user');
const ticket = require('./routes/ticket');

const app = express(); 

app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(session({ 
  secret: 'this-is-a-secret-token', 
  resave: true,
  saveUninitialized: true
}));

//setup routes
app.use('/', admin);
app.use('/', user);
app.use('/', ticket);

//root to login
app.get('/', function (req, res) {
  res.redirect('/login');
})

//login
app.get('/login', function (req, res) {
  res.render('login');
})

app.post('/login', function (req, res) {
  let primary = req.body.primary; //Refer to login.ejs (html), 'body' block, name 'primary'
  let pw = req.body.pw; //Refer to login.ejs (html), 'body' block, name 'pw'
    
  console.log(primary, pw); 

  var sessData = req.session;
  sessData.primary = primary;

  if (primary == 'admin'){
    res.redirect('/admin');
  } else {
    res.redirect('/user');
  }
})

app.get('*', function(req, res) {
  res.send('page doesn\'t exist');
});

app.listen(3000, function () { 
  console.log('Example app listening on port 3000!');
})




module.exports = app;

