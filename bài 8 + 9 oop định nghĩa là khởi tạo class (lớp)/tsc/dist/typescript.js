class Book {
    constructor(code, name, author, price) {
        this.code = code;
        this.name = name;
        this.author = author;
        this.price = price;
    }
    getInfo() {
        return `Book code: ${this.code}, Book name: ${this.name}`;
    }
}
var book1 = new Book('B123', 'chí phèo', 'nam cao', 1000);
console.log(book1);
