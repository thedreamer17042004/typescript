function seData() {
    return [
        {
            name: 'Huy Hoàng', code: 'B12345', toan: 8, ly: 9, hoa: 10
        },
        {
            name: 'Hùng Hậu', code: 'B0346', toan: 5, ly: 3, hoa: 9
        },
        {
            name: 'Huy Tùng', code: 'B12335', toan: 6, ly: 10, hoa: 5
        },
        {
            name: 'Hùng Vy', code: 'B0336', toan: 7, ly: 5, hoa: 8
        }
    ];
}
let myData = seData();
function in_mang(data) {
    var _tr = '';
    for (let obj of data) {
        let markAvg = (obj.toan + obj.ly + obj.hoa) / 3;
        let xepLoai = '';
        if (markAvg < 5) {
            xepLoai = 'Yếu kém';
        }
        else if (markAvg >= 5 && markAvg < 6.5) {
            xepLoai = 'Trung Bình';
        }
        else if (markAvg >= 6.5 && markAvg < 8) {
            xepLoai = 'Khá';
        }
        else if (markAvg >= 8 && markAvg < 9) {
            xepLoai = 'Giỏi';
        }
        else {
            xepLoai = 'Xuất sắc';
        }
        _tr += `<tr>
            <td>${obj.code}</td>
            <td>${obj.name}</td>
            <td>${obj.toan}</td>
            <td>${obj.ly}</td>
            <td>${obj.hoa}</td>
            <td>${markAvg.toFixed(1)}</td>
            <td>${xepLoai}</td>
        
        </tr>`;
    }
    var tbody = document.getElementById('tbody-list');
    tbody.innerHTML = _tr;
}
in_mang(myData);
let loc_diem = () => {
    let diem = document.getElementById('diem');
    let newData = myData.filter(function (obj) {
        let markAvg = (obj.toan + obj.ly + obj.hoa) / 3;
        return markAvg >= diem.value;
    });
    in_mang(newData);
};
function sap_xep_theo_diem(select) {
    if (select.value == 'tang') {
        let myData = seData();
        let sortData = myData.sort(function (a, b) {
            return a.toan < b.toan ? -1 : 0;
        });
        in_mang(sortData);
    }
    else if (select.value == 'giam') {
        let myData = seData();
        let sortData = myData.sort(function (a, b) {
            return a.toan > b.toan ? -1 : 0;
        });
        in_mang(sortData);
    }
    else {
        let myData = seData();
        in_mang(myData);
    }
}
