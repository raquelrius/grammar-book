const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./db');
const config = require('./config');

const bookRouter = require('./entities/book/book.router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/books', bookRouter);

const startServer = async () => {
    try {
        await db.connect();
        app.listen(config.port, () => {});
    } catch (e) {
        console.log(e);
    }
};

startServer();

