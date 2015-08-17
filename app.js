var express = require('express');
var path = require('path');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var server = require('./server');

var app = express();
app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(methodOverride());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/build')));

// View Routing
app.get('/', server.index);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});