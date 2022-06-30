const express = require('express');
const router = express.Router();
const { isAdmin, isAuthor } = require('../config/auth');

const { getAllUsers, getUser, getUserById, updateUser, deleteUser, logout, register } = require('../controllers/userController.js');
const { getBooks, getBooksByAuthor, getBooksById, createBook, updateBook, deleteBook } = require('../controllers/bookController.js');

// Admin stuff
router.get('/users', isAdmin, getAllUsers);
router.get('/users/:id',isAdmin, getUserById);
router.post('/update-user/:id', isAdmin, updateUser);
router.post('/delete-user/:id', isAdmin, deleteUser);

router.get('/user', getUser);
router.post('/register', register);
router.get('/logout', logout);

// CRUD for Books
router.get('/books', getBooks);
router.get('/books-by-author', isAuthor, getBooksByAuthor);
router.get('/books/:id', isAuthor, getBooksById);
router.post('/create-book', isAuthor, createBook);
router.post('/update-book', isAuthor, updateBook)
router.post('/delete-book/:id', isAuthor, deleteBook);

module.exports = router;
