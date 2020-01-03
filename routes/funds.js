var fs = require('fs');
var express = require('express');
var router = express.Router();
 
var fund_list = [];
 
fs.readFile(__dirname + "/../data/" + "fund.json", 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
 
    console.log(data);
    fund_list = JSON.parse(data);
    console.log(fund_list);
  }
});
 
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
 
router.get('/list', function (req, res, next) {
 
    res.render('fundlist', { fund_list: fund_list });
});
 

router.post('/adduser', function (req, res, next) {
  var name = req.body.name;
  var id = req.body.id;
  var pw = req.body.pw;
  var user = {"name":name, "id":id, "pw":pw};
  console.log(user);
  fund_list.push(user);
 
  // 파일 저장
  fs.writeFile(__dirname + "/../data/fund.json",
                JSON.stringify(fund_list, null, '\t'), "utf8", function(err, data){
      if(err) {
        console.log(err);
      }
  })
 
  res.redirect('/funds/list');
 
})
 
module.exports = router;