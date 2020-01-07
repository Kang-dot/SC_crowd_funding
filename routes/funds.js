var fs = require('fs');
var express = require('express');
var router = express.Router();
var crowdFunding_1 = require('../libs/crowdFunding_1');
var crowdFunding_2 = require('../libs/crowdFunding_2');
var crowdFunding_3 = require('../libs/crowdFunding_3');
var crowdFunding_4 = require('../libs/crowdFunding_4');
var crowdFunding_5 = require('../libs/crowdFunding_5');
var crowdFunding_6 = require('../libs/crowdFunding_6');

const crowdFunding1 = new crowdFunding_1();
const crowdFunding2 = new crowdFunding_2();
const crowdFunding3 = new crowdFunding_3();
const crowdFunding4 = new crowdFunding_4();
const crowdFunding5 = new crowdFunding_5();
const crowdFunding6 = new crowdFunding_6();

var fund_list = [];
 
fs.readFile(__dirname + "/../data/" + "fundinginfo.json", 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    fund_list = JSON.parse(data);
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

router.get('/1', async function(req, res, next){
  const pageIndex = 1;
  const goalAmount = await crowdFunding1.getGAmount();
  const totalAmount = await crowdFunding1.getTAmount();
  const deadline = await crowdFunding1.getDeadline();

  res.render('./detail/' + pageIndex, { fund_item: fund_list[pageIndex], index: pageIndex, deadline: deadline, totalAmount:totalAmount, goalAmount: goalAmount });

})

router.get('/2', async function(req, res, next){
  const pageIndex = 2;
  const goalAmount = await crowdFunding2.getGAmount();
  const totalAmount = await crowdFunding2.getTAmount();
  const deadline = await crowdFunding2.getDeadline();

  res.render('./detail/' + pageIndex, { fund_item: fund_list[pageIndex], index: pageIndex, deadline: deadline, totalAmount:totalAmount, goalAmount: goalAmount });

})

router.get('/3', async function(req, res, next){
  const pageIndex = 3;
  const goalAmount = await crowdFunding3.getGAmount();
  const totalAmount = await crowdFunding3.getTAmount();
  const deadline = await crowdFunding3.getDeadline();

  res.render('./detail/' + pageIndex, { fund_item: fund_list[pageIndex], index: pageIndex, deadline: deadline, totalAmount:totalAmount, goalAmount: goalAmount });

})

router.get('/4', async function(req, res, next){
  const pageIndex = 4;
  const goalAmount = await crowdFunding4.getGAmount();
  const totalAmount = await crowdFunding4.getTAmount();
  const deadline = await crowdFunding4.getDeadline();

  res.render('./detail/' + pageIndex, { fund_item: fund_list[pageIndex], index: pageIndex, deadline: deadline, totalAmount:totalAmount, goalAmount: goalAmount });

})

router.get('/5', async function(req, res, next){
  const pageIndex = 5;
  const goalAmount = await crowdFunding5.getGAmount();
  const totalAmount = await crowdFunding5.getTAmount();
  const deadline = await crowdFunding5.getDeadline();

  res.render('./detail/' + pageIndex, { fund_item: fund_list[pageIndex], index: pageIndex, deadline: deadline, totalAmount:totalAmount, goalAmount: goalAmount });

})

router.get('/6', async function(req, res, next){
  const pageIndex = 6;
  const goalAmount = await crowdFunding6.getGAmount();
  const totalAmount = await crowdFunding6.getTAmount();
  const deadline = await crowdFunding6.getDeadline();

  res.render('./detail/' + pageIndex, { fund_item: fund_list[pageIndex], index: pageIndex, deadline: deadline, totalAmount:totalAmount, goalAmount: goalAmount });

})

module.exports = router;