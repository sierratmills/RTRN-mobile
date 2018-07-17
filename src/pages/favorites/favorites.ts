import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MapPage } from '../map/map';
import { CartPage } from '../cart/cart';
import { MainPage } from '../main/main';
import { StoreSitePage } from '../store-site/store-site';
import { OrderPage } from '../order/order';

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
  [x: string]: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
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

  navigateToCart() {
    this.navCtrl.push(CartPage);
  }

  goToPlaceOrder() {
    this.navCtrl.push(OrderPage);
  }

  navigateToMain() {
    this.navCtrl.push(MainPage);
  }

}
