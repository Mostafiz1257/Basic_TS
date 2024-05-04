{
    //type assertion
    let anything: any;
    anything = "Mostafiz";
    anything = true;
    anything = 222;

    // (anything as number).

    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === "string") {
            const convertedResult = parseFloat(value) * 1000;
            return convertedResult;
        }

        else if (typeof value === "number") {
            return value * 1000;
        }
    }

    const result = kgToGm(222) as number
    const res2 = kgToGm("334") as string

    //try catch
    type ErrorType = {
        message: string;
    }
    try {
        //------
    }
    catch (error) {
        console.log((error as ErrorType).message);
    }
}