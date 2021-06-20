const { Router } = require("express");
const bookController = require('./book.controller');

const books = Router();

books.get('/', bookController.getMany);
books.post('/', bookController.createOne);
books.get('/:id', bookController.getOne);
books.delete('/:id', bookController.removeOne);

module.exports = books;