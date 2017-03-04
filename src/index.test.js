var expect = require('chai').expect;
var books = require('./index');


describe('books', function() {
    var isArrayOfStrings = function(array) {
        return array.every(function(item) {
            return typeof(item) === 'string';
        });
    }

    describe('all', function() {
        it('should be an array of strings', function() {
            expect(books.all).to.satisfy(isArrayOfStrings);
        });

        it('should contain `Understanding Cryptography`', function() {
            expect(books.all).to.include('Understanding Cryptography');
        });
    });

    describe('random', function() {
        it('any item', function() {
            expect(books.all).to.include(books.random());
        });
    });
});
