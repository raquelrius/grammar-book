const { Router } = require("express");
const bookController = require('./book.controller');

const books = Router();

books.get('/', bookController.getMany);
books.post('/', bookController.createOne);
books.get('/:id', bookController.getOne);
books.delete('/:id', bookController.removeOne);
books.post('/:id', bookController.addChapter);
books.delete('/:id/:chapterId', bookController.removeChapter);

module.exports = books;