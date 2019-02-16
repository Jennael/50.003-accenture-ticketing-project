/*
 * 16 Feb 2019
 * Log in page for ticketing app
 * 

/* Requiring modules */
const request = require('request'); //Request allows us make our API call and make an http request in node.
const express = require('express');
const bodyParser = require('body-parser'); 

const app = express(); //Create an instance named app by invoking Express

app.use(express.static('public')); //Access to files in 'public', where CSS file is located
app.use(bodyParser.urlencoded({ extended: true })); //Body-parser allows us to make use of the key-value pairs stored on the req-body object

/*
EJS (Embedded JavaScript) allows us to interact with variables and then dynamically 
create our HTML based on those variables. In order to use EJS in Express, we need 
to set up our template engine. 
EJS is accessed by default in the views directory.
*/
app.set('view engine', 'ejs')

/* 
If we visit the root URL, Express will respond with a rendered page of index.ejs. 
*/
app.get('/', function (req, res) {
    res.render('index')
})

/*
Post to the root URL (/). 
*/
app.post('/', function (req, res) {
    let user = req.body.user; //Refer to index.ejs (html), 'body' block, name 'user'
    let pw = req.body.pw; //Refer to index.ejs (html), 'body' block, name 'pw'

    console.log(user, pw); //Log data to console

    /*
    //API call
    request(url, function (err, response, body) {
      if(err){
        res.render('index', {weather: null, error: 'Error, please try again'});
        console.log('err')
      } else {
        let weather = JSON.parse(body);
        console.log(weather)
        if(weather.main == undefined){
            console.log('err2')
          res.render('index', {weather: null, error: 'Error, please try again'});

        } else {
          let weatherText = "It's ${weather.main.temp} degrees in ${weather.name}!";
          res.render('index', {weather: weatherText, error: null});
        }
      }
    });
    */
})


/*
Server is listening on port 3000 for connections. 
To access web app, go to (http://localhost:3000)
*/
app.listen(3000, function () { 
  console.log('Example app listening on port 3000!')
})






