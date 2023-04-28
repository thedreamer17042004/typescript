class StudentObject {
    constructor() {
        this.code = '';
        this.name = '';
        this.toan = 0;
        this.ly = 0;
        this.hoa = 0;
    }
}
class StudentSevice {
    constructor() {
        this.data = this.setData();
    }
    setData() {
        let dataInstorage = localStorage.getItem('Student_data');
        if (dataInstorage) {
            return JSON.parse(dataInstorage);
        }
        else {
            return [];
        }
    }
    showListToTable() {
        let tbody = document.getElementById('tbody-list');
        let _tr = '';
        for (const obj of this.data) {
            let dtb = ((obj.toan + obj.ly + obj.hoa) / 3).toFixed(2);
            let xepLoai = '';
            if (dtb < 5) {
                xepLoai = 'Yếu kém';
            }
            else if (dtb >= 5 && dtb < 6.5) {
                xepLoai = 'Trung Bình';
            }
            else if (dtb >= 6.5 && dtb < 8) {
                xepLoai = 'Khá';
            }
            else if (dtb >= 8 && dtb < 9) {
                xepLoai = 'Giỏi';
            }
            else {
                xepLoai = 'Xuất sắc';
            }
            _tr += `
               <tr>
                <td>${obj.code}</td>
                <td>${obj.name}</td>
                <td>${obj.toan}</td>
                <td>${obj.ly}</td>
                <td>${obj.hoa}</td>
                <td>${dtb}</td>   
                <td>${xepLoai}</td>
                <td>
                    <button class= "bn btn-sm btn-danger" onclick="xoa('${obj.code}')">Xóa</button>
                </td>
               </tr>
            `;
        }
        tbody.innerHTML = _tr;
    }
    addStudent() {
        var form1 = document.getElementById('std_form');
        let std = {
            code: form1.code.value,
            name: form1.name.value,
            toan: parseFloat(form1.toan.value),
            ly: parseFloat(form1.ly.value),
            hoa: parseFloat(form1.hoa.value)
        };
        this.data.push(std);
        let jsonData = JSON.stringify(this.data);
        localStorage.setItem('Student_data', jsonData);
        this.showListToTable();
    }
    deleteStudent(code) {
        let index = this.data.findIndex(function (obj) {
            return obj.code == code;
        });
        this.data.splice(index, 1);
        let jsonData = JSON.stringify(this.data);
        localStorage.setItem('Student_data', jsonData);
        this.showListToTable();
    }
    findByCode(code) {
        let searchData = this.data.filter(function (obj) {
            return obj.name.toLowerCase().includes(code.toLowerCase());
        });
        this.data = searchData;
        this.showListToTable();
    }
}
var stdService = new StudentSevice();
stdService.showListToTable();
function them_moi() {
    stdService.addStudent();
    console.table(stdService.data);
}
function xoa(stdCode) {
    stdService.deleteStudent(stdCode);
}
function tim_kiem_code() {
    let search_code = document.getElementById('search_code');
    stdService.findByCode(search_code.value);
}
