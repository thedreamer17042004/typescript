class Caculator {
    constructor(soA, soB) {
        this.soA = soA;
        this.soB = soB;
    }
    getSum() {
        return this.soA + this.soB;
    }
    getMinus() {
        if (this.soA > this.soB) {
            return this.soA - this.soB;
        }
        else {
            return this.soB - this.soA;
        }
    }
    getMutiply() {
        return this.soA * this.soB;
    }
    getDivide() {
        if (this.soB != 0) {
            return this.soA / this.soB;
        }
        else {
            return 0;
        }
    }
}
var caculator = new Caculator(10, 9);
let a = caculator.getSum();
console.log(a);
console.log(caculator);
class MyCaculator {
    constructor(...args) {
        this.numbers = args;
    }
    execute(op = '+') {
        if (op == '+') {
            let total = 0;
            for (let num of this.numbers) {
                total += num;
            }
            return total;
        }
        else if (op == '*') {
            let total = this.numbers[0];
            this.numbers.shift();
            for (let num of this.numbers) {
                total *= num;
            }
            return total;
        }
    }
}
var myCal = new MyCaculator(1, 2, 3, 4);
console.log(myCal.execute());
console.log(myCal.execute('*'));
