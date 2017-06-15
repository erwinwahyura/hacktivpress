var m_user = require('../models/user')
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken')
var salt = bcrypt.genSaltSync(saltRounds);


var signup = function(req, res, next) {
  var hash = bcrypt.hashSync(req.body.password, salt);
  var user = new m_user({
    user:req.body.user,
    password: hash
  })
  user.save(function(err,result){
    if(err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

var signin = function(req, res, next) {
  var user = req.body.user;
  var password = req.body.password;

  m_user.findOne({ user: user }, function(err, result) {
    if(err) res.send(err);
    if(result) {
      bcrypt.compare(password, result.password)
      .then(data => {
        if(data) {
          var token = jwt.sign({id: result._id, user: result.user}, 'thisismysecretbutiopenittoallogyoucheckidotgan!!');
          res.send({token, user: result.user})
        } else {
          res.send({ msg: 'Incorrect password' });
        }
      })
      .catch(err => console.log(err))
    } else res.send({ msg: 'No such user' })
  })
}

var userInfo = function(req, res, next) {
  let token = req.body.token
  if(token) {
    jwt.verify(token, 'thisismysecretbutiopenittoallogyoucheckidotgan', (err, decoded) => {
      if(!err) {
        console.log(decoded);
        req.body.user = decoded.id;
        next()
      } else {
        res.send(err)
      }
    })
  } else {
    res.send({msg: 'Not logged in'})
  }
}

module.exports = {
  signup,
  signin
}
