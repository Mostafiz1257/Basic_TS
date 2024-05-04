{
    // Generic with interface
    interface Developer<T, X> {
        name: string;
        age: number;
        computer: string;
        brand: {
            model: string;
            price: number;
            overallGood: boolean;
        },
        smartWatch: T;
        shirt ?:X
    }

    interface user1 {
        name:string;
        price:number
    }
    const developer1: Developer<user1,null> = {
        name: "Mostafiz",
        age: 24,
        computer: "HP",
        brand: {
            model: "Elite 1040",
            price: 42000,
            overallGood: true,
        },
        smartWatch: {
            name: "asus",
            price: 2300
        },
        
    }
    const developer2: Developer<string,null> = {
        name: "Mostafiz",
        age: 24,
        computer: "HP",
        brand: {
            model: "Elite 1040",
            price: 42000,
            overallGood: true,
        },
        smartWatch:"Aroge"
     
    }
}