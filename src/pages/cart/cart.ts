import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
import { MapPage } from '../map/map';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  public itemList: Array<Item>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToWebsite() {

  }

  goToPayment() {
    this.navCtrl.push(PaymentPage);
  }

  goToMap() {
    this.navCtrl.push(MapPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

}
