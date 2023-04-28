/**
 * một lớp khi mà mình ko cần gán rá trị luôn ta làm = '' như code bên dưới luôn. khi khởi tạo ta cần gán giá trị luôn thì dùng cái contructor luôn này
 * storage chỉ lưu được chuỗi thôi nên mình phải chuyển về string
 */
class StudentObject {
    code: string = '';
    name: string = '';
    toan: number = 0;
    ly: number = 0;
    hoa: number = 0;
}
class StudentSevice {
    data: Array<StudentObject>;

    constructor(){
        this.data = this.setData();
    }

    private setData(): Array<StudentObject>{
        let dataInstorage = localStorage.getItem('Student_data')// dạng chuôi
        if(dataInstorage){
            return JSON.parse(dataInstorage);// chuyển từ chuỗi json sang mảng object
        }else{
            return [];
        }
        // return [
        //     {code: 'B1234', name: 'Hoang Anh', toan: 8, ly:8, hoa: 9},
        //     {code: 'B1234', name: 'Văn Nam', toan: 7, ly:5, hoa: 10}
        // ];
    }

    public showListToTable(){
        let tbody: any = document.getElementById('tbody-list');
        let _tr = '';
        
        for (const obj of this.data) {
            let dtb:any = ((obj.toan + obj.ly + obj.hoa) /3).toFixed(2);
            let xepLoai:any = '';
            if(dtb < 5){
                xepLoai = 'Yếu kém';
            }else if(dtb >= 5 && dtb < 6.5){
                xepLoai = 'Trung Bình';
            }else if(dtb >= 6.5 && dtb < 8){
                xepLoai = 'Khá';
            }else if(dtb >= 8 && dtb < 9){
                xepLoai = 'Giỏi';
            }else{
                xepLoai = 'Xuất sắc'
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
            `;//nối chuỗi +=
            
        }
        tbody.innerHTML = _tr;

        
    }

    addStudent():void {
        var form1: any = document.getElementById('std_form');

        let std: StudentObject = {// ta khởi tạo một cái biến std : kế thừa kiểu dữ liệu studentObject
            code: form1.code.value,//= let code: string = form1.code.value;
            name: form1.name.value,
            toan: parseFloat(form1.toan.value),
            ly: parseFloat(form1.ly.value),
            hoa: parseFloat(form1.hoa.value)
        }
        this.data.push(std);// thêm vào mảng có sẵn là this.data
        // chuyển mảng đối tượng sang chuỗi json như chuỗi
        let jsonData = JSON.stringify(this.data);
        // lưu vào storage
        localStorage.setItem('Student_data', jsonData);
        this.showListToTable();// gọi lại phương thức lóad danh sách
    }

    deleteStudent(code:string): void{
        let index = this.data.findIndex(function(obj){
            return obj.code == code;
        });

        this.data.splice(index, 1);
        let jsonData = JSON.stringify(this.data);
        localStorage.setItem('Student_data', jsonData);
        // splice là hàm xóa phần tử của mảng
        this.showListToTable();
    }


    findByCode(code:string){
        let searchData = this.data.filter(function(obj){
            // return obj.code == code;// tìm đúng 100%
            return obj.name.toLowerCase().includes(code.toLowerCase());// tìm gần đúng
        });
        this.data = searchData;
        this.showListToTable();

    }
}

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