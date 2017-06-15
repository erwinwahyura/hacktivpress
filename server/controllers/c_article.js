// var mongoose = require('mongoose')
const m_article = require('../models/article')
const m_user = require('../models/user')
var create = function( req, res ) {
  if(req.body.user) {
    let id = req.body.user
    console.log('id ', id);
    m_user.findById(id, function(err, dataUser) {
      if (!err) {
        console.log('data user ', dataUser.user);
        var artilce = new m_article({
          title: req.body.title,
          content: req.body.content,
          category: req.body.category,
          author: req.body.user
          // author: dataUser.user
        })
        artilce.save(function(err, result) {
          if (err) res.send(err)
          else res.send(result)
        })
      } else {
        res.send(err)
      }
    })
  } else {
    console.log('login pls');
  }

}

var getAll = function(req, res) {
  m_article.find({}, function(err, result) {
    if(err) res.send(err)
    else res.send(result)
  })
}

var getById = function(req, res) {
  let id = req.params._id
  m_article.find({_id: id}, function(err, result) {
    if(err) res.send(err)
    else res.send(result)
  })
}

var getByAuthor = function(req, res) {
  let author = req.params.author
  m_article.find({author:author}, function(err, result) {
    if(err) res.send(err)
    else res.send(result)
  })
}

var getByCategory = function(req, res) {
  let category = req.params.category
  m_article.find({category:category}, function(err, result) {
    if(err) res.send(err)
    else res.send(result)
  })
}

var remove = function(req, res) {
  let id = req.params._id
  m_article.remove({_id:id}, function (err, result) {
    if(err) res.send(err)
    else res.send(result)
  })
}

var edit = function(req, res) {
  let id = req.params._id
  m_article.findById({_id:id}, function(err, data) {
    m_article.findOneAndUpdate({_id:id}, {$set: {title:req.body.title || data.title, content: req.body.content || data.content, category:req.body.category || data.category}}, function(err, result) {
      if(err) res.send(err)
      else res.send(result)
    })
  })

}


module.exports = {
  create,
  getAll,
  getById,
  getByAuthor,
  getByCategory,
  remove,
  edit
}
