//function

function add(num1: number,num2:number = 23):number{
    return num1 + num2;
}

add(3,2);


const addNum=(num1:number, num2:number):number=>num1 + num2;
addNum(4,3);

//method in Object

const userInfo={
    name:"Mostafz",
    age:24,
    amount:100,
    addAmount(amount:number):string{
        return `Total amount is :${this.amount+amount}`
    }
}

const arr:number[] = [2,3,4,3,4,];
const newArray:number[]= arr.map((ele:number):number=>ele*ele)