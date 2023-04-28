/**
 * một lớp khi mà mình ko cần gán rá trị luôn ta làm = '' như code bên dưới luôn. khi khởi tạo ta cần gán giá trị luôn thì dùng cái contructor luôn này
 * storage chỉ lưu được chuỗi thôi nên mình phải chuyển về string
 */

import { StudentSevice } from "./studentService.js";



var stdService = new StudentSevice();
stdService.showListToTable();
// console.table(stdService.data);

function them_moi() {

    stdService.addStudent();
    console.table(stdService.data);
}



// xóa
function xoa(stdCode: string){
   stdService.deleteStudent(stdCode)
}



function tim_kiem_code(){
    let search_code:any = document.getElementById('search_code')
    stdService.findByCode(search_code.value);
}