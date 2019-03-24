var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var mailConfig = require('./mailConfig');
var handlebars = require('handlebars');
var fs = require('fs');
//
var readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};

smtpTransport = nodemailer.createTransport(smtpTransport({
    //options for connection data
    host: mailConfig.host,
    secure: mailConfig.secure,
    // port: mailConfig.port,
    auth: {
        user: mailConfig.auth.user,
        pass: mailConfig.auth.pass
    }
}));

readHTMLFile(__dirname + '/emailtest.html', function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
        username: "Mei Mei (testing)"
    };
    var htmlToSend = template(replacements);
    
    var mailOptions = {
        from: 'AccentureSUTDTest@gmail.com',
        to: 't_mei_mei@live.com, meimei_tay@mymail.sutd.edu.sg',
        subject: 'Sending Email using Node.js',
        html : htmlToSend
     };

    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + response.response);
        }
    });
});








