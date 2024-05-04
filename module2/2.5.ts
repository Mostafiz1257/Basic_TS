{
    // GENERIC WITH FUNCTION
    const course = (params: string): string[] => {
        return [params]
    }
    const res1 = course("Bangla")

    //generic function
    const courseWithGeneric = <T>(params: T): T[] => {
        return [params]
    }

    type User = {
        name: string;
        code: number
    }
    const res2 = courseWithGeneric<User>({ name: "Mostafiz", code: 2 })

    //Generic tuple
    const createArrayTuple = <P, Q>(param1: P, param2: Q): [P, Q] => {
        return [param1, param2]
    }
    const res3 = createArrayTuple<number, { name: string }>(333, { name: "Abc" })


    const stdCourseInfo = <T>(student: T) => {
        const courseTitle = 'Next level web course';
        return {
            ...student, courseTitle
        }
    }

    const std1 = stdCourseInfo<{
        name: string; age: number; level
            : number
    }>({ name: "Mostafiz", age: 24, level: 2 })

    
}