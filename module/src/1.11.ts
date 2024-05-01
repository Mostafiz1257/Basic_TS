// const age = 15
// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Not adult");
// }
// const isAdult = age >= 18 ? "Adult" : "Not adult"
// console.log({ isAdult });

// //nullish coalescing(Only for use null and undefined)

// const isAdmin = undefined;
// const result = isAdmin ?? "Guest"
// const result2 = isAdmin ? "Myname" : "Youname"
// console.log({ result }, { result2 });

type User = {
    name: string;
    address: {
        home: string;
        road?: string;
    };
    contract: string;
};

const user: User = {
    name: "Mostafiz",
    address: {
        home: "Tataserr",
        
    },
    contract: "01939393",
};

const homeAddress = user.address.road ?? "No address";
console.log({ homeAddress });
