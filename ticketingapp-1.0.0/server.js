//Import statement
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const request = require('request'); 



app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
    res.render('index')
})

app.post('/', function (req, res) {
    let user = req.body.user;
    let pw = req.body.pw;

    console.log(user, pw);

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



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})






