const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    chapters: [{ type: Schema.Types.ObjectId, ref:'Chapter' }]
}, {timestamps: true});

const chapterSchema = new mongoose.Schema({
    name: String,
    bookId: {type: Schema.Types.ObjectId, ref: 'Book'},
    content: String,
})

const Book = mongoose.model('Book', bookSchema);
const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = {
    Book,
    Chapter,
};
