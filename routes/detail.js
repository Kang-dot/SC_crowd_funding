var express = require('express');
var router = express.Router();

fund_list = [];

/* GET home page. */
router.get('/:index', function(req, res, next) {
  const pageIndex = req.params.index;
  res.render('./detail/' + pageIndex);
});

module.exports = router;
