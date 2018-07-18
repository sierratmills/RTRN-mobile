import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMapSearchComponent } from '../../components/google-map-search/google-map-search';


/**
 * Generated class for the SearchResultMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-result-map',
  templateUrl: 'search-result-map.html',
})
export class SearchResultMapPage {
  @ViewChild(GoogleMapSearchComponent) mapComponent: GoogleMapSearchComponent;
  public placeid = "";
  public store="";
  public lat="";
  public lng="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.placeid = navParams.get('id');
    this.store = navParams.get('name');
    this.lat = navParams.get('lt');
    this.lng = navParams.get('lg');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultMapPage');
    console.log(this.lat);
    console.log(this.lng);
    this.mapComponent.loadMap(Number(this.lat),  Number(this.lng));
  }

  testMarker(){
    this.mapComponent.addMarker(Number(this.lat), Number(this.lng));
  }

}
