import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../models/store';
import { SearchResultsPage } from '../search-results/search-results';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the StoreSitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-site',
  templateUrl: 'store-site.html',
})
export class StoreSitePage {
  public store: Store;
  public link;
  public browser;

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    this.store = this.navParams.get("storeParameter");
  //  this.link = this.store.url;
   // this.browser = this.iab.create(this.store.url);
    this.browser = this.iab.create('https://ionicframework.com/', '_blank');

  }


  navigateToResults() {
    this.browser.close();
//    this.navCtrl.push(SearchResultsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreSitePage');
  }
  
}
