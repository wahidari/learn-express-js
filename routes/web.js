const express = require('express');
const router = express.Router();

// Require controller modules.
const userController = require('../controllers/UserController');
const bookController = require('../controllers/BookController');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

// THIS ROUTE START WITH "/users"
router.get('/users', userController.index);
// GET request for creating a User. NOTE This must come before routes that display User (uses id).
router.get('/users/create', userController.create);
router.post('/users/store', userController.store);
router.get('/users/:id', userController.show);
router.get('/users/edit/:id', userController.edit);
router.patch('/users/update/:id', userController.update);
router.delete('/users/delete/:id', userController.destroy);

// THIS ROUTE START WITH "/books"
router.get('/books', bookController.index);
// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/books/create', bookController.create);
router.post('/books/store', bookController.store);
router.get('/books/:id', bookController.show);
router.get('/books/edit/:id', bookController.edit);
router.patch('/books/update/:id', bookController.update);
router.delete('/books/delete/:id', bookController.destroy);

module.exports = router;
