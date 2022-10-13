function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

Book.prototype.printTitle = function() {
    console.log(this.title);
};

//com ES6: 

class Book2 {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    printIsbn() {
        console.log(this.isbn)
    }
}

let book = new Book('title', 'pag', 'isbn');
console.log(book.title);
book.title = 'new title';
console.log(book.title);

let book2 = new Book2('title2', 'pag', 'isbn');
console.log(book2.title);
book2.title = 'new title2';
console.log(book2.title);
