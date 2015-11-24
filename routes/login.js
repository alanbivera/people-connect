var express = require('express');
var mongoose = require('mongoose');
var UserDetails = mongoose.model('User');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
   UserDetails.find(function(err, login){
    if(err){ return next(err); }

    res.json(login);
  });
});


module.exports = router;
