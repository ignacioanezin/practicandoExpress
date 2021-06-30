var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/contact', (req, res) => {
  res.render('pages/contact');  
});

router.get('/about', (req, res) => {
  res.render('pages/about');  
});

module.exports = router;
