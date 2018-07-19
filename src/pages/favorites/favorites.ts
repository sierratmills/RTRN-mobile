import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MapPage } from '../map/map';
import { MainPage } from '../main/main';
import { StoreSitePage } from '../store-site/store-site';
import { OrderPage } from '../order/order';
import { Store } from '../../models/store';
import { Http } from '@angular/http';
import { SearchResultMapPage } from '../search-result-map/search-result-map';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  public stores: Store[];
  public userid;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public http: Http) {

    this.http.get("https://rtrn.herokuapp.com/favoritestores?jwt=" + localStorage.getItem("TOKEN")).subscribe(
      result => {
        var info = result.json();
        this.stores = info;
        console.log(info);
      },

      err => {
        // Invalid, login!
      }
    );
  }

  navigateToMap(latitude: string, longitude: string, store: string, gid: string){
    this.navCtrl.push(SearchResultMapPage,{
      id: gid,
      name: store,
      lt: latitude,
      lg: longitude
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  presentStoreModal(store: StoreSitePage) {
    let profileModal = this.modalCtrl.create(StoreSitePage, { storeParameter: store, userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }

  goToMap() {
    this.navCtrl.push(MapPage);
  }

  goToPlaceOrder() {
    this.navCtrl.push(OrderPage);
  }

  navigateToMain() {
    this.navCtrl.push(MainPage);
  }

}
