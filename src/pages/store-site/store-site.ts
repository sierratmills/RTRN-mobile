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
  public store: string;
  public link;
  public browser;

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    this.store = this.navParams.get("store");
  //  this.link = this.store.url;
   // this.browser = this.iab.create(this.store.url);
<<<<<<< HEAD
    this.browser = this.iab.create(this.store);
=======
    this.browser = this.iab.create('https://ionicframework.com/', '_blank');
>>>>>>> 9cbd24c4ba18ca2083b277ec70e7c52b01ffd873

  }


  navigateToResults() {
    this.browser.close();
//    this.navCtrl.push(SearchResultsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreSitePage');
  }
  
}
