const Book = require('./book.model');

const getMany = async(req, res) => {
    try {
        const docs = await Book.find().lean().exec();
        res.status(200).json({results: docs});
    } catch (e) {
        res.status(500).end();
    }
}

const getOne = async (req, res) => {
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

const updateOne = async (req, res) => {
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

const createOne = async (req, res) => {
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

const removeOne = async (req, res) => {
    try {
        const doc = await Book.deleteOne({
            _id: req.params.id
        }).lean().exec();
        res.status(200).json({ deleted: doc });
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getMany,
    createOne,
    getOne,
    removeOne,
    updateOne
}