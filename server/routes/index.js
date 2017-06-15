var express = require('express')
var router = express.Router()
var c_user = require('../controllers/c_user')
var c_article = require('../controllers/c_article')

router.get('/', function (req, res) {
  res.send('Hai Erwin ur express is working')
})

router.post('/users/signup', c_user.signup)
router.post('/users/signin', c_user.signin)

router.get('/articles', c_article.getAll) // done
router.post('/articles', c_user.userInfo, c_article.create) // done
router.get('/articles/:_id', c_article.getById) // done
router.put('/articles/:_id', c_user.userInfo, c_article.edit)
router.delete('/articles/:_id', c_user.userInfo, c_article.remove)

module.exports = router
