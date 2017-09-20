var express = require('express');
var request = require('request');

var app = express();
app.use(express.static(__dirname + '/static'));
// app.use(express.views(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.sendFile("./index.html");
});

app.get('/search/:foo', function(req, res) {
  var url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&';
  var q = req.params.foo;
  var fullUrl = url + 'q=' + q;
  request({
    url: fullUrl
  }, function(error, response, body) {
    var dataObj = JSON.parse(body);
    // res.render('index', {data: dataObj});
    res.send(dataObj);
  });
});

app.listen(3000);
