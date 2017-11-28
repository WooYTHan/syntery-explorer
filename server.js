var express = require('express');
var app = express();

var options = {
  index: "phylo.html"
};

app.use('/', express.static('public', options));

 var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('my app is listening at http://%s:%s', host, port);
});