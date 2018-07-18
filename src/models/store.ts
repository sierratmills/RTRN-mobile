import { Item } from "./item";

export class Store {
    public storename: String;
    public storetype: String;
    public address: String;
    public url: string;
    public lat: String;
    public lng: String;
    public googleid: String;
    public userid: number;
    
        constructor(public store: String, private type: String, public ad: String, public URL: string, public lt: String, public lg: String, public id: String, public user: number) {
            this.storename = store;
            this.storetype = type;
            this.address = ad;
            this.url = URL;
            this.lat = lt;
            this.lng = lg;
            this.googleid = id;
            this.userid = user;
        }

    
       
    }