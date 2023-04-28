function hello(firstName: string, lastName: string, age: number, gender: boolean): string {
    return `hello may name is ${firstName} ${lastName}, my age is ${age}, gender is ${gender ? 'Nam' : 'Nữ'}`;
}

var hello1 = function (firstName: string, lastName: string, age: number, gender: boolean): string {
    return `hello may name is ${firstName} ${lastName}, my age is ${age}, gender is ${gender ? 'Nam' : 'Nữ'}`;
}


var hello2 =  (firstName: string, lastName: string, age: number, gender: boolean): string => {
    return `hello may name is ${firstName} ${lastName}, my age is ${age}, gender is ${gender ? 'Nam' : 'Nữ'}`;
}
let result = hello('Nguyễn', 'Hoàng Anh', 23, true);
console.log(result)

function demo3(){
    return
}
var demo1 = function(){
    return
}
var demo2 = (name: string) :string => {
    // DÙNG NHIỀU NHẤT
    return '';
}