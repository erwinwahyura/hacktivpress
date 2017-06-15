var m_user = require('../models/user')
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);


var signup = function(req, res, next) {
  var hash = bcrypt.hashSync(req.body.password, salt);
  var user = new m_user({
    user:req.body.user,
    password: hash
  })
  answer.save(function(err,result){
    if(err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

var signin = function(req, res, next) {
  var user = new m_user({
    user:req.body.user,
    password: hash
  })
  answer.save(function(err,result){
    if(err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

module.exports = {
  signup
}
