var uniqueRndArr = require('unique-random-array');
var books = require("./books.json");

module.exports = {
    all: books,
    random: uniqueRndArr(books)
};
