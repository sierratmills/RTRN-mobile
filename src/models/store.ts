import { Item } from "./item";

export class Store {
    public storename: String;
    public storetype: String;
    public address: String;
    public url: String;
    public lat: String;
    public lng: String;
        public googleid: String;
    
        constructor(public store: String, private type: String, public ad: String, public URL: String, public lt: String, public lg: String, public id: String) {
            this.storename = store;
            this.storetype = type;
            this.address = ad;
            this.url = URL;
            this.lat = lt;
            this.lng = lg;
            this.googleid = id;
        }

    
       
    }