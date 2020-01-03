var fs = require('fs');
var express = require('express');
var router = express.Router();

var funding_list = [];

fs.readFile(__dirname + "/../data/" + "fundinginfo.json", "utf8", function(err, data){
  if(err){
    console.log(err);
  } else {
    console.log(data);
    funding_list = JSON.parse(data);
    console.log(funding_list);
  }
});

router.get('/', function(req, res, next){
  res.send('response with a resource');
});

router.get('/list', function(req, res, next){
  res.render('fundinglist', {funding_list: funding_list});
});

router.post('/addfunding', function(req, res, next){
  
})