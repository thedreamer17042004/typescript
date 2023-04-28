class Caculator {
    soA: number;
    soB: number;

    constructor(soA: number, soB: number){
        this.soA = soA;
        this.soB = soB;
    }

    getSum(): number{    
        return this.soA + this.soB;
    }
    getMinus(): number{
        if(this.soA > this.soB) {
            return this.soA - this.soB;
        }else{
            return this.soB - this.soA;
        }
    }
    getMutiply(): number{
        return this.soA * this.soB;
    }
    getDivide(): number{
        if(this.soB != 0) {
            return this.soA / this.soB;
        }else{
            return 0;
        }
    }
}


var caculator = new Caculator(10, 9);
let a = caculator.getSum();
console.log(a);
console.log(caculator)



// lop c2 advanced
class MyCaculator {
    numbers: Array<number>;
    constructor(...args: Array<number>){// ... show cách để chưa bt số lg là bao nhiêu
        this.numbers = args;
    }
    // lớp cx là hàm bthg cx có kiểu tham số và hàm trả về
    execute(op: string = '+'): number {
        if(op == '+'){
            let total = 0;

            for (let num of this.numbers) {
                total += num;
            }
            return total;
        }else if(op == '*'){
            let total = this.numbers[0];
            this.numbers.shift()// loại bỏ phần tử đầu tiên vì mh lấy nó ra để làm cái cờ là mh sử dụng rồi thì mình cần loại bỏ nó luôn

            for (let num of this.numbers) {
                total *= num;
            }
            return total;
        }
       
    }
}
var myCal = new MyCaculator(1,2,3,4);
console.log(myCal.execute());
console.log(myCal.execute('*'));