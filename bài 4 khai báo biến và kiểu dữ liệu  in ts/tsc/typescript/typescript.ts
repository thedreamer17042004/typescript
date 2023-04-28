/**
 * kiểu chuỗi => string
 * kiểu số => number
 * kiểu boolean => boolean
 * kiểu mảng => array
 * kiểu object => object
 * kiểu void => void hàm ko trả về cái gì cả
 * kiểu tuple
 * enum
 */
/**
 * có 3 từ khóa để sử dụng chokhai báo biến
 * var tên_biến:data_type = value (giá trị thay đổi được biến sẽ tồn tại during quá trình biên dịch)
 * let ten_bien:data_type = value (sau khi thực thi thì biến sẽ được giải phóng)
 * const ten_bien:data_type = value (hằng, bắt buộc phải có giá trị cho biến , ko thay đổi được trong quá trình biên dịch)
 */
var _name:string = "Trần Như Nhộng";
_name = "Hắc Lào"
let age:number = 25;
const appURL: string = 'http://localhost:5500';
let isMale: boolean = 1 >= 2;
var infor: Array<string> = [
    'Nguyễn Hoàng Anh',
    'Nguyễn Bình Dương'
];
var std: object = {name: 'nguyen van a', age: 25}
console.table(infor[0]) // in theo kiểu table thôi để test
console.log(std);


//tuple

let gender: [string, string] = ['mail', 'femail'];

enum or{red = '#000', blue = '#fff'};
console.log(or.blue)