var express = require('express');
var bodyparser = require('body-parser');

var connection = require('./Dbconnection');
var routes = require('./routes');

var app = express();
app.use(bodyparser.urlencoded({extended: true})); //support x-www-form-urlencoded
app.use(bodyparser.json());
 
app.use('/Student',routes);

var server = app.listen(8000, function() {
  console.log('Server listening on port ' + server.address().port);
});

module.exports = app;