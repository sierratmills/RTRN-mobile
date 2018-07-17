export class SearchParameters{
        private zipcode:String;
        private category: String;
        private lat: String;
        private long: String;
    
        constructor(zip:String, cat:String){
            this.zipcode = zip;
            this.category = cat;
            this.lat = '';
            this.long = '';
            this.setLatLongFromZip();
        }
    
        setLatLongFromZip(){
           
        }
    
        getZipCode():String{
            return this.zipcode;
        }
    
        getCategory():String{
            return this.category;
        }
    
        getLat():String{
            return this.lat;
        }
    
        getLong():String{
            return this.long;
        }
    
    }