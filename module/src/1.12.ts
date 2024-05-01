{
    //nullable
    const search = (value: string | null) => {
        if (value) {
            console.log("This is correct");
        } else {
            console.log("Not searching");
        }
    }

    search(null)

    //unknown
    const convertSpeed = (value: unknown) => {
        if (typeof value === "number") {
            const convertedSpeed = value * 1000
            console.log(convertedSpeed);
        }
        else if(typeof value ==='string'){
            const stringToNumber = value.split(' ')
            const num = parseFloat(stringToNumber[0])*1000
            console.log(`Your converted result is ${num}`);
        }
        else{
            console.log("Invalid input");
        }
    }
    convertSpeed(`2322 Hello`)


    //Never type
    const throwError=(value:string)=>{
        throw new Error(value)
    }
    throwError("Not showing")
}