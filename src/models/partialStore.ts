export class PartialStore {
    public storename: String;
    public storetype: String;
    public lat: String;
    public lng: String;
    public googleid: String;
    
        constructor(public store: String, private type: String, public lt: String, public lg: String, public id: String) {
            this.storename = store;
            this.storetype = type;
            this.lat = lt;
            this.lng = lg;
            this.googleid= id;
        }
    
        getStorename(): String {
            return this.storename;
        }
    
        getStoretype(): String {
            return this.storetype;
        }
    
        getlat(): String {
            return this.lat;
        }
    
        getlong(): String {
            return this.lng;
        }
    
       
    }