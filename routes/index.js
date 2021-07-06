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

router.get('/', async (req, res) => {
  const books = await api.getBooks();
  console.log(books);
  // res.render('index', { title: 'Express' });

  res.render('index', {
    title: 'Library',
    books
  })
  // res.send(books);
});

router.get('/books/:id', async (req, res) => {
  // console.log(req.params);
  const book = await api.getBookById(req.params.id);

  res.render('pages/book', { book });
  res.send(`You good!, the ID  you are looking for is ${req.params.id}`);
})

router.get('/search', async  (req, res) => {
 const books = await api.findBookByTitle(req.query.query);
 res.render('index', {
   title: 'The Search',
   books
 });

  // res.send(req.query);
});

router.get('/add', async (req, res) => {
  //Get the list of authors and pass it to the render

  const authors = await api.getAuthors();

  // console.log(authors);

  res.render('pages/add', { authors });  
});

router.post('/add_process', async (req, res) => {
  // Destructured 

  const {title, price, author, cover } = req.body;
  const book = await api.addBook(title, price, author, cover);

  res.send(book);  
});

router.get('/contact', (req, res) => {
  res.render('pages/contact');  
});

router.get('/about', (req, res) => {
  res.render('pages/about');  
});

module.exports = router;
