{
    //constraints using with keyOf
    type Vehicle ={
        bike:string;
        car:string;
        ship:string
    } 

    type Owner = keyof Vehicle
    const user1:Owner = "car" 


   
    // person["age"]

    //using keyOf in a function

    const getValue=<X,Y extends keyof X>(obj:X, key:Y)=>{
        return obj[key]
    }

    const person={
        name:"Mostafiz",
        age:24
    }

    const pen={
        name:'Matador',
        price:5
    }
    const result = getValue(pen,'price')
}