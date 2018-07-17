import { User } from "./user";

import { Item } from "./item";

export class Order{
    private user: User;
    private items: Array<Item>;
    private orderNumber: String;
    private address: String;
    private payment: String;
    private reciept: String;

    constructor(u:User, it:Array<Item>, ad:String, pay:String){
        this.user=u;
        this.items=it;
        this.address=ad;
        this.payment=pay;
        //create unique order number 
    }

    placeOrder(){

    }

    sendReciept(){

    }
    //other methods
}