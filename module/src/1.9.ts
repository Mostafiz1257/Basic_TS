{
    //Alias type

    type Student = {
        name: string;
        age: number;
        contract: string
    }

    const student1: Student = {
        name: "Mostafiz",
        age: 24,
        contract: "018938393"
    }

    const student2: Student = {
        name: "Rahman",
        age: 33,
        contract: "028478393"
    }

    type UserName= string;
    const user1: UserName = "Mostafiz"

    type Add=(num1:number, num2:number)=>number
    const add:Add =(num1, num2)=>num1+ num2
}