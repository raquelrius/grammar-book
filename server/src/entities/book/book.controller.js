const Book = require('./book.model');

const getAllBooks = async(req, res) => {
    try {
        const docs = await Book.find().lean().exec();
        res.status(200).json({results: docs});
    } catch (e) {
        res.status(500).end();
    }
}

const getBook = async (req, res) => {
    try {
        const doc = await Book.findOne({ _id: req.params.id }).exec();
        if (!doc) {
            return res.status(404).json({ error: 'Book not found'});
        }
        res.status(200).json({ results: doc});
    } catch (e) {
        console.log(e);
        res.status(500).end();
    }
}

const updateBook = async (req, res) => {
    try {
        const doc = await Book.findOneAndUpdate(
    { _id: req.params.id },
            req.body,
    {new: true}
        ).lean().exec();
        if (!doc) {
            return res.status(404).json({ error: 'Book not found'});
        }
        res.status(200).json({ results: doc });
    } catch (e) {
        console.log(e);
        res.status(500).end();
    }
}

const createBook = async (req, res) => {
    try {
        const doc = await Book.create(req.body);
        if (!doc) {
            return res.status(404).json({ error: 'Book not found'});
        }
        res.status(200).json({ results: doc });
    } catch (e) {
        console.log(e);
        res.status(500).end();
    }
};

const removeBook = async (req, res) => {
    try {
        const doc = await Book.deleteOne({
            _id: req.params.id
        }).lean().exec();
        res.status(200).json({ deleted: doc });
    } catch (e) {
        console.log(e);
    }
}

const addChapter = async (req, res) => {
    try {
        const book = await Book.findOneAndUpdate(
            { _id: req.params.id },
            {$push: { chapters: req.body}}
        ).exec();
        res.status(200).json({ results: book });
    } catch (e) {
        console.log(e);
        res.status(500).end();
    }
}

const removeChapter = async (req, res) => {
    try {
        const book = await Book.findOneAndUpdate(
            { _id: req.params.id },
            {$pull : {chapters: {_id : req.params.chapterId }}}
        ).exec();
        res.status(200).json({ results: book });
    } catch (e) {
        res.status(500).end();
    }
}

module.exports = {
    getAllBooks,
    createBook,
    addChapter,
    getBook,
    removeBook,
    removeChapter,
    updateBook
}