import uniqueRndArr from 'unique-random-array';
import books from './books.json';

var getRndBook = uniqueRndArr(books);

module.exports = {
    all: books,
    random: function(count) {
        if(count === undefined) {
            return getRndBook();
        }
        else {
            var books = [];
            for(var i = 0; i < count; i++) {
                books.push(getRndBook());
            }

            return books;
        }
    }
};
