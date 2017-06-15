var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var cors = require('cors')

mongoose.connect('mongodb://localhost/live-coding-blog');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Erwin is connected with mongodb !');
});
var index = require('./routes/index')

var app = express()
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', index)

app.listen(3000)

module.exports = app
