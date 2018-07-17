import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  public placeid = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.placeid = navParams.get('id');
    this.initMap();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultMapPage');
  }

  initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.866, lng: 151.196},
      zoom: 15
    });

    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);

    service.getDetails({
      placeId: this.placeid
    }, function(place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
            'Place ID: ' + place.formatted_address + '</div>');
          infowindow.open(map, this);
        });
      }
    });
  }

}
