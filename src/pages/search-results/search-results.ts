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

/**
 * Generated class for the SearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {

  public stores = [];
  public zip: String;
  public category: String;
  public categoryUppercase: String;

  constructor(public modalCtrl: ModalController, public navParams: NavParams, public navCtrl: NavController, public http: Http) {
    this.zip = navParams.get('zipcode');
    this.category = navParams.get('category');
    this.stores = navParams.get('stores');
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

  addToFavorites(store: string){

  }

}


