{
    //destructuring

    const numbers: number[] = [3, 2, 3, 2, 34, 3]
    const [, , a, ...rest] = numbers

    const user = {
        id: 2,
        name: {
            firstName: "Nil",
            lastName: "Onjona"
        },
        cell:"018302022",
        town: "Dhaka"
    }
    const {id,name:{lastName},cell:PhoneNumber} = user
}