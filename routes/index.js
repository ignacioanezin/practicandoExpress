var express = require('express');
var router = express.Router();
const api = require('../api')

/* GET home page. */
router.get('/authors', async (req, res) => {
  const authors = await api.getAuthors();
  console.log(authors)
  // res.render('index', { title: 'Express' });
  res.send(authors);
});

router.get('/books', async (req, res) => {
  const books = await api.getBooks();
  console.log(books);
  // res.render('index', { title: 'Express' });
  res.send(books);
});

router.get('/contact', (req, res) => {
  res.render('pages/contact');  
});

router.get('/about', (req, res) => {
  res.render('pages/about');  
});

module.exports = router;
