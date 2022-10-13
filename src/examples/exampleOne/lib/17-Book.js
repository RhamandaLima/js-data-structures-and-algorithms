class Book {
  constructor(title) {
    this.title = title;
  }
  printTitle() {
    console.log(this.title);
  }
}

exports.default = Book;
module.exports = exports["default"];
