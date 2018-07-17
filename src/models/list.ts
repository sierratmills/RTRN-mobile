
import { Item } from "./item";
import { User } from "./user";

export class List{
    private listname: String
    private users: Array<User>
    private items: Array<Item>;

    constructor(n: String, us: Array<User>, it:Array<Item>){
        this.listname = n;
        this.users=us;
        this.items=it;
    }

    addItem(it: Item){
        //add it to items
    }

    deleteItem(it: Item){
        //delete it from items
    }
    
}