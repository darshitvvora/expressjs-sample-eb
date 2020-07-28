var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welcome Arthur Dent and Ford Prefect');
});

module.exports = router;
