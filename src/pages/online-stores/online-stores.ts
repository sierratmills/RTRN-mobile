import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { OrderPage } from '../order/order';
import { MainPage } from '../main/main';
import { StoreSitePage } from '../store-site/store-site';

/**
 * Generated class for the OnlineStoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-online-stores',
  templateUrl: 'online-stores.html',
})
export class OnlineStoresPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnlineStoresPage');
  }

  presentStoreModal(url: string) {
    let profileModal = this.modalCtrl.create(StoreSitePage, { store: url, userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
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
