{
    //Promise 

    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data: string = "something";

            if (data) {
                resolve(data)
            }
            else {
                reject("Failed to load data")
            }
        })
    }

    const showData = async () => {
        const data = await createPromise();
        console.log(data);
    }

    showData();


    // -------------------------->
type Todo={
    id:number;
    name:string;
    title:string
}
    const getTodo = async ():Promise<Todo> => {
        const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = (await response).json();
        return data;
    }

}