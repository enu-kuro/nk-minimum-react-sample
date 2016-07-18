var express = require('express');
var app = express();
var compression = require('compression');
app.use(compression({level: 6}));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
var morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.get('/*', function(req, res, next) {
  res.sendFile(__dirname + '/public/index.html');
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
