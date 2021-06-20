const mongoose = require('mongoose');

const KanjiRecordSchema = new mongoose.Schema({
    symbol: String,
    reading: [String],
    definition: String,
    examples: [String]
});

const ContentSchema = new mongoose.Schema({
    title: String,
    description: String,
    examples: [String],
    kanji: [KanjiRecordSchema],
})

const ChapterSchema = new mongoose.Schema({
    name: String,
    order: Number,
    content: [ContentSchema],
    vocabulary: [String],
});

const BookSchema = new mongoose.Schema({
    name: String,
    level: String,
    chapters: [ChapterSchema]
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
