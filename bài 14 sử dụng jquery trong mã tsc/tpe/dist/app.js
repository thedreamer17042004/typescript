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
