System.register(["./studentService.js"], function (exports_1, context_1) {
    "use strict";
    var studentService_js_1, stdService;
    var __moduleName = context_1 && context_1.id;
    function them_moi() {
    }
    function xoa(stdCode) {
        stdService.deleteStudent(stdCode);
    }
    function tim_kiem_code() {
        let search_code = document.getElementById('search_code');
        stdService.findByCode(search_code.value);
    }
    return {
        setters: [
            function (studentService_js_1_1) {
                studentService_js_1 = studentService_js_1_1;
            }
        ],
        execute: function () {
            $('#btn_add').click(function () {
                if ($('#code').val() == '') {
                    alert('Mã ko đc để trống');
                    return false;
                }
                else if ($('#code').val().length != 5) {
                    alert('ma sinh vien phai co 5 ki tu');
                    return false;
                }
                else {
                    let stdByCode = stdService.findByCode1($('#code').val());
                    if (stdByCode.length > 0) {
                        alert('Mã sinh viên đã được sử dụng');
                        return false;
                    }
                }
                if ($('#name').val() == '') {
                    alert('Họ tên không để trống');
                    return false;
                }
                else if ($('#name').val().length > 30) {
                    alert('Họ tên ko dc quá 30 ký tự');
                    return false;
                }
                if ($('#toan').val() == '') {
                    alert('Diem toan  không để trống');
                    return false;
                }
                else if ($('#toan').val() < 0) {
                    alert('Điêm ko đc âm');
                    return false;
                }
                else if (isNaN($('#toan').val())) {
                    alert('Điểm toán phải là một con số');
                    return false;
                }
                if ($('#ly').val() == '') {
                    alert('Diem ly  không để trống');
                    return false;
                }
                else if ($('#ly').val() < 0) {
                    alert('Điêm ko đc âm');
                    return false;
                }
                else if (isNaN($('#ly').val())) {
                    alert('Điểm lý phải là một con số');
                    return false;
                }
                if ($('#hoa').val() == '') {
                    alert('Diem hóa  không để trống');
                    return false;
                }
                else if ($('#hoa').val() < 0) {
                    alert('Điêm ko đc âm');
                    return false;
                }
                else if (isNaN($('#hoa').val())) {
                    alert('Điểm hóa phải là một con số');
                    return false;
                }
                stdService.addStudent();
            });
            $(document).on('click', '.btn-delete', function () {
                var stdCode = $(this).data('id');
                stdService.deleteStudent(stdCode);
            });
            $(document).on('click', '.btn_search', function () {
                let search_code = document.getElementById('search_code');
                if (search_code != ``) {
                    stdService.findByCode(search_code.value);
                }
                else {
                    location.reload();
                }
            });
            stdService = new studentService_js_1.default();
            stdService.showListToTable();
        }
    };
});
