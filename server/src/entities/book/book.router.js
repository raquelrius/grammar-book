const { Router } = require("express");
const bookController = require('./book.controller');

const books = Router();

books.get('/', bookController.getAllBooks);
books.post('/', bookController.createBook);
books.get('/:id', bookController.getBook);
books.delete('/:id', bookController.removeBook);
books.post('/:id', bookController.addChapter);
books.delete('/:id/:chapterId', bookController.removeChapter);

module.exports = books;