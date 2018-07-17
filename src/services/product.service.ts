import { Injectable } from "@angular/core";
import { StoreSitePage } from "../pages/store-site/store-site";
import { Store } from "../models/store";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    private stores: Array<Store>;

    constructor(public http: Http) {
        this.stores = [];
    }

    getAllProducts(callback) {
        this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10')
        .subscribe(
            result => {
                console.log("Result:", result);

                callback(null, result.json);
        }, err => {
            console.log("Oops!");
        }
        );
    }
}