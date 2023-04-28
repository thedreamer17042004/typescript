class Book {
    constructor(name, author, price) {
        this.code = 'B123';
        this.name = name;
        this.author = author;
        this.price = price;
    }
    getInfo() {
        return `Book code: ${this.code} Book name: ${this.name}`;
    }
}
var book1 = new Book('chí phèo', 'nam cao', 1000);
var book1 = new Book('Thị nợ', 'ngô tất tố', 1300);
console.log(book1.getInfo());
