// protected là ko thể truy cập từ bên ngoài , private là chỉ mình nó thôi chỉ truy cập bên trọng
// cases ta muốn che dấu ta dùng protected or private
// public là mặc định có thể truy xuất ở mọi nơ
// định nghĩa lớp
class Book {
    /**
     * các thuộc tính là các biến
     */
    protected code:string = 'B123';
    name: string;
    author: string;
    price: number;


    /**
     * @returns Phương thức khởi tạo phương thức luôn chạy đầu tiên
     */
    constructor(name: string, author: string, price: number) {
        // thuộc tính dc gọi  by từ khóa this vd là code
       this.name = name;
       this.author = author;
       this.price = price;
        
    }

    /**
     * các phương thức là các hàm
     */
    getInfo(){
        return `Book code: ${this.code} Book name: ${this.name}`
    }
}

// sử dụng lớp
/**
 * khởi tọa một đối tg book cụ thể thông qua lớp book chung
 */
var book1 = new Book('chí phèo', 'nam cao', 1000);

var book1 = new Book('Thị nợ', 'ngô tất tố', 1300);
console.log(book1.getInfo());