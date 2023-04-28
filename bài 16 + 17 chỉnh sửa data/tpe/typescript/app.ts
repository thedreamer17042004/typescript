/**
 * một lớp khi mà mình ko cần gán rá trị luôn ta làm = '' như code bên dưới luôn. khi khởi tạo ta cần gán giá trị luôn thì dùng cái contructor luôn này
 * storage chỉ lưu được chuỗi thôi nên mình phải chuyển về string
 */

import StudentSevice from "./studentService.js";
declare var $: any; // declare là để cho phép mình chỉ dùng biến ảo $ bên phía jquery thôi chứ ko cho nó biên dịch sang js


$('#btn_add').click(function(){
    if($('#code').val() == ''){
        alert('Mã ko đc để trống');
        return false;
    }else if($('#code').val().length != 5){
        alert('ma sinh vien phai co 5 ki tu');
        return false;
    }else{
        let stdByCode = stdService.findByCode1($('#code').val());
       if(stdByCode.length > 0){
        alert('Mã sinh viên đã được sử dụng');
        return false;

       }
    }

    if($('#name').val() == ''){
        alert('Họ tên không để trống')
        return false;
    }else if($('#name').val().length > 30){
        alert('Họ tên ko dc quá 30 ký tự')
        return false;
    }

    // toan validate
    if($('#toan').val() == ''){
        alert('Diem toan  không để trống')
        return false;
    }else if($('#toan').val() < 0){
        alert('Điêm ko đc âm')
        return false;
    }else if(isNaN($('#toan').val())){
        alert('Điểm toán phải là một con số')
        return false;
    }

    // lý
    if($('#ly').val() == ''){
        alert('Diem ly  không để trống')
        return false;
    }else if($('#ly').val() < 0){
        alert('Điêm ko đc âm')
        return false;
    }else if(isNaN($('#ly').val())){
        alert('Điểm lý phải là một con số')
        return false;
    }

    // hóa
    if($('#hoa').val() == ''){
        alert('Diem hóa  không để trống')
        return false;
    }else if($('#hoa').val() < 0){
        alert('Điêm ko đc âm')
        return false;
    }else if(isNaN($('#hoa').val())){
        alert('Điểm hóa phải là một con số')
        return false;
    }
    stdService.addStudent();
});

$(document).on('click', '.btn-delete', function(){
    var stdCode: string = $(this).data('id');// data là tiền tố id là hậu tố lấy từ id của nút xóa bên html
     stdService.deleteStudent(stdCode)

})

$(document).on('click', '.btn-edit', function(){
    var stdCode: string = $(this).data('id');// data là tiền tố id là hậu tố lấy từ id của nút xóa bên html
     let stdByCode = stdService.findByCode1(stdCode);
     if(stdByCode.length > 0){
        $('#code').val(stdByCode[0].code);
        $('#name').val(stdByCode[0].name);
        $('#toan').val(stdByCode[0].toan);
        $('#ly').val(stdByCode[0].ly);
        $('#hoa').val(stdByCode[0].hoa);
        $('#btn_update').show();
        $('#btn_add').hide();
        $('#code').prop('readonly', true)// chỉ đọc thôi

     }

});

$(document).on('click', '#btn_update', function(){
    if($('#code').val() == ''){
        alert('Mã ko đc để trống');
        return false;
    }else if($('#code').val().length != 5){
        alert('ma sinh vien phai co 5 ki tu');
        return false;
    }

    if($('#name').val() == ''){
        alert('Họ tên không để trống')
        return false;
    }else if($('#name').val().length > 30){
        alert('Họ tên ko dc quá 30 ký tự')
        return false;
    }

    // toan validate
    if($('#toan').val() == ''){
        alert('Diem toan  không để trống')
        return false;
    }else if($('#toan').val() < 0){
        alert('Điêm ko đc âm')
        return false;
    }else if(isNaN($('#toan').val())){
        alert('Điểm toán phải là một con số')
        return false;
    }

    // lý
    if($('#ly').val() == ''){
        alert('Diem ly  không để trống')
        return false;
    }else if($('#ly').val() < 0){
        alert('Điêm ko đc âm')
        return false;
    }else if(isNaN($('#ly').val())){
        alert('Điểm lý phải là một con số')
        return false;
    }

    // hóa
    if($('#hoa').val() == ''){
        alert('Diem hóa  không để trống')
        return false;
    }else if($('#hoa').val() < 0){
        alert('Điêm ko đc âm')
        return false;
    }else if(isNaN($('#hoa').val())){
        alert('Điểm hóa phải là một con số')
        return false;
    }
   var code = $('#code').val();
    stdService.updateStd(code);
    $('#std_form').trigger("reset");
    $('#btn_update').hide();
    $('#btn_add').show();
    $('#code').prop('readonly', false)

})

$(document).on('click', '.btn_search', function(){
    let search_code:any = document.getElementById('search_code')
   if(search_code != ``){
    stdService.findByCode(search_code.value());
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