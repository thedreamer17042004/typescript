System.register([], function (exports_1, context_1) {
    "use strict";
    var StudentObject;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            StudentObject = class StudentObject {
                constructor() {
                    this.code = '';
                    this.name = '';
                    this.toan = 0;
                    this.ly = 0;
                    this.hoa = 0;
                }
            };
            exports_1("StudentObject", StudentObject);
        }
    };
});
