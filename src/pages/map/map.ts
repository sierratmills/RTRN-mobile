import { Component,  ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMapComponent } from '../../components/google-map/google-map';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapComponent: GoogleMapComponent;
 
    constructor() {
 
    }
 
    testMarker(){
        let center = this.mapComponent.map.getCenter();
        this.mapComponent.addMarker(center.lat(), center.lng());
    }
  }
