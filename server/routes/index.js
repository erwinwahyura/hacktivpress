var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.send('Hai Erwin ur express is working')
})

module.exports = router
