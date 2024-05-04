{
    //Utilities type


    type Person = {
        name: string;
        age: number;
        email?: string;
        contract: number
    }

    //pick
    type NameAge = Pick<Person, 'name' | "age">

    //Omit
    type ContractInfo = Omit<Person, 'name' | 'age'>
    //Required
    type RequiredInfo = Required<Person>

    //Pertial
    type PartialInfo = Partial<Person>
    //ReadOny 

    type PersonReadOnly = Readonly<Person>


    //Record
    type RecordData = Record<string,unknown>

    const data1 : RecordData = {
        name:"Alim",
        age:"23",
        location:"Tangail",
        contract:1933
    }


//Important thing remember this.    
    const emptyObj  : Record<string, unknown> = {name:"abc", age:33}
}