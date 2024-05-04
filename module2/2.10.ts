{
    //Mapped Type

    const arrOfNumbers: number[] = [1, 2, 3, 4, 5];
    const arrOfStrings: string[] = arrOfNumbers.map((num) => num.toString());
    // console.log(arrOfStrings);

    type Area = {
        height: string;
        width: string
    }

    type AreaString<T> = {
        [key in keyof T]: T[key];
    }
    const area1: AreaString<{ height: string; width: number }> = { height: "200", width: 212 }

    type Circle<T> = {
        [key in keyof T]: T[key]
    }

    const circle1: Circle<{ value: number }> = { value: 222 }
}