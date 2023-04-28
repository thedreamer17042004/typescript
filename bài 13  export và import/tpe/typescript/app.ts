/**
 * một lớp khi mà mình ko cần gán rá trị luôn ta làm = '' như code bên dưới luôn. khi khởi tạo ta cần gán giá trị luôn thì dùng cái contructor luôn này
 * storage chỉ lưu được chuỗi thôi nên mình phải chuyển về string
 */

import StudentSevice from "./studentService.js";
declare var $: any; // declare là để cho phép mình chỉ dùng biến ảo $ bên phía jquery thôi chứ ko cho nó biên dịch sang js


$('#btn_add').click(function(){
    stdService.addStudent();
});

$(document).on('click', '.btn-delete', function(){
    var stdCode: string = $(this).data('id');// data là tiền tố id là hậu tố lấy từ id của nút xóa bên html
     stdService.deleteStudent(stdCode)

})

$(document).on('click', '.btn_search', function(){
    let search_code:any = document.getElementById('search_code')
   if(search_code != ``){
    stdService.findByCode(search_code.value);
   }else{
    location.reload();// rỗng load lại page
   }

})

var stdService = new StudentSevice();
stdService.showListToTable();
// console.table(stdService.data);



// cach bắt sự kiện click
// let a = document.getElementById("btn_add");
// console.log(a)
// a.addEventListener("click", function() {
//     stdService.addStudent();
// });


function them_moi() {
}



// xóa
function xoa(stdCode: string){
   stdService.deleteStudent(stdCode)
}



function tim_kiem_code(){
    let search_code:any = document.getElementById('search_code')
    stdService.findByCode(search_code.value);
}