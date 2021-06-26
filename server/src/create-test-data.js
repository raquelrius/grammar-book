const Book = require("./entities/book/book.model");
const db = require("./db");

const book = {
    "name": "Minna no nihongo chukyuu 2",
    "level": "N3",
    "chapters": [
        {
            "name": "Lección 13",
            "order": 13,
            "vocabulary": [],
            "content": [
                {
                    "title": "たて",
                    "description": "たて se usa para indicar que lo descrito ocurre justo después de cierta situación.",
                    "examples": [],
                    "kanji": []
                },
                {
                    "title": "たとえ〜ても",
                    "description": "たとえ〜ても indica que la hipótesis formulada es un ejemplo extremo y que la consecuencia posterior al mismo ocurrirá incluso en un caso como ese.",
                    "examples": [
                        "たとえ今回の実験にしっぱいしても、またチャレンジするつもりだ。"
                    ],
                    "kanji": []
                }
            ]
        },
        {
            "name": "Lección 14",
            "order": 14,
            "vocabulary": [],
            "content": [
                {
                    "title": "といった",
                    "description": "Esta frase indica que S1 es un ejemplo específico de S2.",
                    "examples": [],
                    "kanji": []
                }
            ]
        }
    ]
};


const createData = async () => {
    console.log('Connecting to db...');
    await db.connect();
    const doc = await Book.create(book);
    console.log(doc)
    console.log('Japanese book created!')
    process.exit();
}

createData();


