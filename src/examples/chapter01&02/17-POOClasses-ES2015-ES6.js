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


//Inheritance ES2015:

class ITBook extends Book2 {
    constructor(title, pages, isbn, technology) {
        super(title, pages, isbn);
        this.technology = technology;
    }

    printTechnology() {
        console.log(this.technology);
    }
}
let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'JavaScript');
console.log(jsBook.title);
console.log(jsBook.printTechnology());

//Getters and setters:

class Person {
    constructor(name) {
        this._name = name;
    }
    get name(){
        return this._name;
    }   
    set name(value){
        this._name = value;
    }
}
let lotrChar = new Person('Frodo');
console.log(lotrChar.name);
lotrChar.name = 'Gandalf';
console.log(lotrChar.name);
lotrChar._name = 'Sam';
console.log(lotrChar.name);
