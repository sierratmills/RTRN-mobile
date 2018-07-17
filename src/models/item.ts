import { Store } from "./store";
import { List } from "./list";
import { Order } from "./order";
import { User } from "./user";

export class Item {

    private itemname: String;
    private itemtype: String;
    private price: String;
    private URL: String;
    private store: Store;
    private size: String;
    private image: String;
    private carts: Array<User>; //users with this item in their cart 
    private list: Array<List>;
    private orders: Array<Order>;

    constructor(public n: String, public st: Store, public img: String, public pr: String, public url: String,
        public it: String, public sz: String) {
        this.itemname = n;
        this.itemtype = it;
        this.price = pr;
        this.URL = url;
        this.store = st;
        this.size = sz;
        this.image = img;
    }

    getItenName(): String{
        return this.itemname;
    }

    getItemType(): String {
        return this.itemtype;
    }

    getPrice(): String {
        return this.price;
    }

    getURL(): String {
        return this.URL;
    }

    getStore(): Store {
        return this.store
    }

    getSize(): String {
        return this.size;
    }

    getImage(): String {
        return this.image;
    }
}