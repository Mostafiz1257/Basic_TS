{
    //type allias
    type User1 = {
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & { role: string }
    const user1: UserWithRole2 = {
        name: "Mostafiz",
        age: 24,
        role: "Student",
        gender: "male"
    }
    //interface
    interface User2 {
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User2 {
        gender: string
        role: string
    }

//array interface

type Roll= number[]
interface Roll1 {
    [index : number] : string
}
const numbers:Roll1=['3','4']

//function interface

type Add1=(num1:number, num2:number)=>number

interface Add2{
    (num1:number, num2:number) : number
}
const add:Add2=(num1 , num2)=>{
    return num1 + num2
}
}