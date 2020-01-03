var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/fourth', function(req, res, next) {
  res.render('fourth', { title: 'Express' });
});

module.exports = router;
