(function(){

    'use strict';

    var app = angular.module('BitwiseBooks');

    app.service('BooksService', function($http) {

        var books = [];

        function bootstrap(data) {
            data.forEach(function(book) {
                books.push(book);
            });
        }

        function find(book_id){

            return _.find(books, {id: book_id});

        }

        return {
            find: find,
            bootstrap: bootstrap,
            books: books
        }

    });

}());