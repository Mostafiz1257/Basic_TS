{
    //union and intersections

    //union
    type FrontendDeveloper="GoodDev" | "BadDev"
    const dev1:FrontendDeveloper ="GoodDev"; 


    type BackendDeveloper ="GoodDev" | "BadDev"
    type FullStackDev = FrontendDeveloper | BackendDeveloper;

    type User ={
        name: string;
        gender: "male" | "female"
        blood ?:"a+" | "b+" | "o+"
    }
     const user1:User={
        name:"Mostafiz",
        gender:"male",
        
     }


     //Intersections

     type FrontDev={
        skills:string[],
        role:string
     }
     type BackDev={
        skills:string[],
        role:string
     }

     type FullDev = FrontDev & BackDev
     const newUSer:FullDev ={
        skills:["html","react"],
        role:"Full Dev"
     }
}