var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'paradata.io : Home',
  	h1: 'Paradata Applications',
  	classname: 'homepage'
  });
});

/* GET typography. */
router.get('/typography', function(req, res, next) {
  res.render('typography', {
    title: 'paradata.io : Typography',
    h1: 'Typography',
    classname: 'typography'
  });
});

module.exports = router;
