// toFixed là để đưa số về mấy chuỗi thập phân


function seData():Array<any> {
    return  [
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
    ]
}
/**
 * Hàm in mảng
 */
let myData = seData();
function in_mang(data: any){
    var _tr: any = '';
    for(let obj of data) {
        let markAvg: number = (obj.toan + obj.ly + obj.hoa)/3;
        let xepLoai:string = '';
        if(markAvg < 5){
            xepLoai = 'Yếu kém';
        }else if(markAvg >= 5 && markAvg < 6.5){
            xepLoai = 'Trung Bình';
        }else if(markAvg >= 6.5 && markAvg < 8){
            xepLoai = 'Khá';
        }else if(markAvg >= 8 && markAvg < 9){
            xepLoai = 'Giỏi';
        }else{
            xepLoai = 'Xuất sắc'
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
    var tbody: any = document.getElementById('tbody-list');
    tbody.innerHTML = _tr;
}
// duyệt mảng
// gọi hàm để in
in_mang(myData);

// ham loc diem
let loc_diem = ():void => {
    let diem:any = document.getElementById('diem');

    let newData = myData.filter(function(obj){
        let markAvg: number = (obj.toan + obj.ly + obj.hoa)/3;
        return markAvg >= diem.value;
    });

    in_mang(newData);
}

// để tái sử dụng code ta phải dùng hàm và truyền một tham số vào trong nó tham số đó để xác định được thì ta phỉa
// biết được cái gì thay đổi trong hàm vd trên kia từ newData thành myData thay đổi


// sắp xếp điểm
function sap_xep_theo_diem(select: any){
    // var tang_giam:any = document.getElementById('sap_xep');

    if(select.value == 'tang'){
        // sap xep tang dan
        let myData = seData();

        let sortData =  myData.sort(function(a, b){// a là trc b là sau (a vs b là cái object)
            return a.toan < b.toan ? -1 : 0;
        });
        in_mang(sortData);
        // sort bình thg nó săp xếp tăng dần or giảm dần theo mảng thôi nhưng mảng này là đối tg nên phải có function
    }else if(select.value == 'giam') {
        let myData = seData();
        let sortData =  myData.sort(function(a, b){// a là trc b là sau (a vs b là cái object)
            return a.toan > b.toan ? -1 : 0;
        });
        in_mang(sortData);
    }else{
        let myData = seData();
        in_mang(myData);
    }
}