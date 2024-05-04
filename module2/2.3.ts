{
    //Generics

    type GenericsArray<T> = Array<T>
    const numbers: GenericsArray<number> = [2, 3, 2, 4, 3]
    const strings: GenericsArray<string> = ["eds", "dsds", "asds"]
    const booleanArray: GenericsArray<boolean> = [true, false, true]

    //Generics array of Object

    const mentors: GenericsArray<{ name: string, age: number }> = [
        {
            name: "Mosta",
            age: 23
        },
        {
            name: "Shahidul",
            age: 23
        }
    ]

    //generics tuple
    type GenericsStdTuple<x, y, z> = [x, y, z]
    const students: GenericsStdTuple<string, string, string> = ["std1", "std2", "std3"]
    const stdInfo:GenericsStdTuple<number,{name:string},boolean> = [1,{name:"std1"}, true]
}
