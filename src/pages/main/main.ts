import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserprofPage } from '../userprof/userprof';
import { ShopPage } from '../shop/shop';
import { MapPage } from '../map/map';
import { CartPage } from '../cart/cart';
import { FavoritesPage } from '../favorites/favorites';
import { OnlineStoresPage } from '../online-stores/online-stores';
import { OrderhistoryPage } from '../orderhistory/orderhistory';
import { ListPage } from '../list/list';
import { UserListsPage } from '../user-lists/user-lists';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  logOut() {
    this.navCtrl.setRoot(HomePage);
  }

  navigateToHomePage() {
    console.log("Navigating..");
    this.navCtrl.push(HomePage);
  }

  navigateToShoppingCart() {
    console.log("Navigating..");
    this.navCtrl.push(CartPage);
  }

  navigateToMapPage() {
    console.log("Navigating..");
    this.navCtrl.push(MapPage);
  }

  navigateToFavorites() {
    this.navCtrl.push(FavoritesPage);
  }

  navigateToShopPage() {
    console.log("Navigating..");
    this.navCtrl.push(ShopPage);
  }

  navigateToLists() {
    this.navCtrl.push(UserListsPage);
  }

  navigateToHistory() {
    this.navCtrl.push(OrderhistoryPage);
  }

  navigateToUserProfile() {
    console.log("Navigating..");
    this.navCtrl.push(UserprofPage);
  }

  navigateToOnlineShops() {
    console.log("Navigating..");
    this.navCtrl.push(OnlineStoresPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
