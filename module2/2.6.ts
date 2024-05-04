{
    //constraints

    const stdCourseInfo = <T extends {id:number; name:string}>(student: T) => {
        const courseTitle = 'Next level web course';
        return {
            ...student, courseTitle
        }
    }

    const std1 = stdCourseInfo<{ id:number;
        name: string; age: number; level
            : number
    }>({id:2, name: "Mostafiz", age: 24, level: 2 })




}