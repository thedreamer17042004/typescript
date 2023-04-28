// cd .\dis\ là đi vào folder dist
// định nghĩa lớp
class Book {
    /**
     * các thuộc tính là các biến
     */
    code:string ;
    name: string;
    author: string;
    price: number;


    /**
     * @returns Phương thức khởi tạo phương thức luôn chạy đầu tiên
     */
    constructor(code: string, name: string, author: string, price: number) {
        // thuộc tính dc gọi  by từ khóa this vd là code
       this.code = code;
       this.name = name;
       this.author = author;
       this.price = price;
        
    }

    /**
     * các phương thức là các hàm
     */
    getInfo(){
        return `Book code: ${this.code}, Book name: ${this.name}`
    }
}

// sử dụng lớp
/**
 * khởi tọa một đối tg book cụ thể thông qua lớp book chung
 */
var book1 = new Book('B123', 'chí phèo', 'nam cao', 1000);
// var book3: Book = {code: 'b5778', name:'tat den', author: 'nam cao', price: 900000}
console.log(book1);