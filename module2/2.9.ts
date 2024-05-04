{
    type X = string;
    type Y = number;

    type A = X extends string ? true :  false

    type AllCar ={
        bike:string;
        car:string;
        plane:string;
    }

   type ByeCar <T>=  T extends keyof AllCar ? true : false

   type ShopNow = ByeCar<"bike">
}