import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { StoreSitePage } from '../store-site/store-site';
import { ProductService } from '../../services/product.service';
import { Store } from '../../models/store';
import { MapPage } from '../map/map';
import { HomePage } from '../home/home';
import { MainPage } from '../main/main';
import { Http } from '@angular/http';
import { Order } from '../../models/order';
import { OrderPage } from '../order/order';
import { SearchResultMapPage } from '../search-result-map/search-result-map';
import { ShopPage } from '../shop/shop';
import { PartialStore } from '../../models/partialStore';

/**
 * Generated class for the SearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;
let map: any;
let infowindow: any;
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {
  public storesToStore = [];
  public storeInfo = [];
  public addresses = [];
  public urls = []
  public nextPageToken: string;
  public nextStores = [];
  public stores = [];
  public zip: string;
  public category: string;
  public categoryUppercase: string;
  public nextPage: string;
  public lat: number;
  public lng: number;
  public type: string;
  public userid: number;

  constructor(public modalCtrl: ModalController, public navParams: NavParams, public navCtrl: NavController, public http: Http) {
    this.zip = navParams.get('zipcode');
    this.category = navParams.get('category');
    this.stores = navParams.get('stores');
    this.nextPage = navParams.get('nextPage');
    this.lat = navParams.get('lat');
    this.lng = navParams.get('lng');
    this.categoryUppercase = navParams.get('category').toUpperCase();
    console.log(this.stores);
  }


  presentStoreModal(url: string) {
    let profileModal = this.modalCtrl.create(StoreSitePage, { store: url, userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultsPage');
  }

  navigateToMain() {
    this.navCtrl.push(MainPage);
  }

  navigateToSearch(){
    this.navCtrl.push(ShopPage);
  }

  goToPlaceOrder() {
    this.navCtrl.push(OrderPage);
  }

  navigateToMap(latitude: string, longitude: string, store: string, gid: string){
    this.navCtrl.push(SearchResultMapPage,{
      id: gid,
      name: store,
      lt: latitude,
      lg: longitude
    });
  }

  moreStores(){
    this.getStoreType();
    this.searchForStore();
    setTimeout(() => { this.navigateToSearchResults(); }, 10000);
  }

  navigateToSearchResults(){
    var latlng = new google.maps.LatLng(this.lat, this.lng);
    map = new google.maps.Map(document.getElementById('map'), {
      center: latlng,
      zoom: 12
    });
    var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: { lat: this.lat, lng: this.lng },
        radius: 15000,
        type: [this.type],
        pagetoken: this.nextPageToken
      }, (next_page_token) => {
        this.nextPageToken = next_page_token;
        console.log("NEXT PAGE TOKEN: " + this.nextPageToken);
      }, (error: any) => {
        console.log(error);
      });
    console.log("Navigating..");
    this.navCtrl.push(SearchResultsPage, {
      category: this.type,
      zipcode: this.zip,
      stores: this.nextStores,
      nextPage: this.nextPageToken,
      lat: this.lat,
      lng: this.lng
    });
  }

  getStoreType() {
    if (this.category == "clothing") {
      this.category = "clothing_store";
      this.type = "clothing";
    } else if (this.category == "furniture") {
      this.category = "furniture_store";
      this.type = "furniture";
    } else if (this.category == "electronics") {
      this.category = "electronics_store";
      this.type = "electronics";
    } else if (this.category == "jewelry") {
      this.category = "jewelry_store";
      this.type = "jewelry";
    } else if (this.category == "shoes") {
      this.category = "shoe_store";
      this.type = "shoes";
    } else if (this.category == "flowers") {
      this.category = "florist";
      this.type = "flowers";
    } else if (this.category == "books") {
      this.category = "book_store";
      this.type = "books";
    }
  }

  searchForStore() {
    var latlng = new google.maps.LatLng(this.lat, this.lng);
    map = new google.maps.Map(document.getElementById('map'), {
      center: latlng,
      zoom: 12
    });
    var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: { lat: this.lat, lng: this.lng },
        radius: 15000,
        type: [this.category],
        pagetoken: [this.nextPageToken]
      }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (let i = 0; i < results.length; i++) {
            var name = results[i].name;
            var lat = results[i].geometry.location.lat();
            var lng = results[i].geometry.location.lng();
            var id = results[i].place_id;
            var storet = this.category;
            var store = new PartialStore(name, storet, lat, lng, id);
            this.storeInfo[i] = store;
            this.getDetails(id, i);
          }
        }
      }, (error: any) => {
        console.log(error);
      });
  }

  async getDetails(id: String, i: number) {
    var latlng = new google.maps.LatLng(this.storeInfo[i].lat, this.storeInfo[i].lng);
    map = new google.maps.Map(document.getElementById('map'), {
      center: latlng,
      zoom: 12
    });
    var service = new google.maps.places.PlacesService(map);
    service.getDetails({
      placeId: this.storeInfo[i].googleid
    }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.addresses[i] = place.formatted_address;
        this.urls[i] = place.website;
        var store = new Store(this.storeInfo[i].storename, this.storeInfo[i].storetype, this.addresses[i], this.urls[i], this.storeInfo[i].lat, this.storeInfo[i].lng, this.storeInfo[i].googleid, null);
        this.nextStores.push(store);
        this.storesToStore[i] = store;
        console.log(store);
        setTimeout(() => {
          this.addStores(i);
        }, 1000);
      }
    }, (error: any) => {
      console.log(error);
    });
  }


  addStores(i: number) {
    console.log("in add stores");
    console.log(this.storesToStore[i]);
    var name = this.storesToStore[i].storename;
    var type = this.storesToStore[i].storetype;
    var link = this.storesToStore[i].url;
    var add = this.storesToStore[i].address;
    var lt = this.storesToStore[i].lat;
    var lg = this.storesToStore[i].lng;
    var id = this.storesToStore[i].googleid;
    this.http.post("https://rtrn.herokuapp.com/createstore", {
      storename: name,
      storetype: type,
      url: link,
      returnurl: "",
      address: add,
      lat: lt,
      long: lg,
      googleid: id,
      userid: null
    }).subscribe(
      result => {
        console.log(result);
      });
  }
  
  addToFavorites(name: string, latit: number, longit: number){
    this.http
    .put("https://rtrn.herokuapp.com/addfavorite?jwt=" + localStorage.getItem("TOKEN"), {
      storename: name,
      lat: latit,
      long: longit
    })
    .subscribe(
      result => {
        console.log(result);

      },

      err => {
        console.log(err);
      }
    );
  }

}



