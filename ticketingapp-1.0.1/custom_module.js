//exports keyword to make properties and methods available outside the module file.
const request = require('request'); 


module.exports = function (param) {
    this.param = param;

    /*API call*/

    console.log(param);
    
    return param;
};

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