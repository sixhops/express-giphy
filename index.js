var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/static'));
// app.use(express.views(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));//tell your app to use the module
app.use(bodyParser.json());


app.get('/', function(req, res) {
  res.sendFile("./index.html");
});

app.get('/search/:query', function(req, res) { //getting data form the API and sending it into a dataObj
  var url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&';
  var q = req.params.query;
  var fullUrl = url + 'q=' + q;
  request({
    url: fullUrl
  }, function(error, response, body) {
    var dataObj = JSON.parse(body);
    res.send(dataObj); //this is what is showing up as an array
    // res.render('index', {data: dataObj});
  });
  // response({
  //
  // })
});



app.listen(3000);
