import { Component, Input, Renderer2, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Plugins } from '@capacitor/core';

/**
 * Generated class for the GoogleMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

const { Geolocation, Network } = Plugins;

@Component({
    selector: 'google-map',
    templateUrl: 'google-map.html'
})
export class GoogleMapComponent {

    @Input('apiKey') apiKey: string;

    public map: any;
    public markers: any[] = [];
    private mapsLoaded: boolean = false;
    private networkHandler = null;

    constructor(private renderer: Renderer2, private element: ElementRef, @Inject(DOCUMENT) private _document) {

    }

    ngOnInit() {

        this.init().then((res) => {
            console.log("Google Maps ready.")
        }, (err) => {
            console.log(err);
        });

    }

    private init(): Promise<any> {

        return new Promise((resolve, reject) => {

            this.loadSDK().then((res) => {

                this.initMap().then((res) => {
                    resolve(true);
                }, (err) => {
                    reject(err);
                });

            }, (err) => {

                reject(err);

            });

        });

    }

    private loadSDK(): Promise<any> {

        console.log("Loading Google Maps SDK");

        return new Promise((resolve, reject) => {

            if (!this.mapsLoaded) {

                Network.getStatus().then((status) => {

                    if (status.connected) {

                        this.injectSDK().then((res) => {
                            resolve(true);
                        }, (err) => {
                            reject(err);
                        });

                    } else {

                        if (this.networkHandler == null) {

                            this.networkHandler = Network.addListener('networkStatusChange', (status) => {

                                if (status.connected) {

                                    this.networkHandler.remove();

                                    this.init().then((res) => {
                                        console.log("Google Maps ready.")
                                    }, (err) => {
                                        console.log(err);
                                    });

                                }

                            });

                        }

                        reject('Not online');
                    }

                }, (err) => {

                    // NOTE: navigator.onLine temporarily required until Network plugin has web implementation
                    if (navigator.onLine) {

                        this.injectSDK().then((res) => {
                            resolve(true);
                        }, (err) => {
                            reject(err);
                        });

                    } else {
                        reject('Not online');
                    }

                });

            } else {
                reject('SDK already loaded');
            }

        });


    }

    private injectSDK(): Promise<any> {

        return new Promise((resolve, reject) => {

            window['mapInit'] = () => {
                this.mapsLoaded = true;
                resolve(true);
            }

            let script = this.renderer.createElement('script');
            script.id = 'googleMaps';

            if (this.apiKey) {
                script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&libraries=places&callback=mapInit';
            } else {
                script.src = 'https://maps.googleapis.com/maps/api/js?libraries=places&callback=mapInit';
            }

            this.renderer.appendChild(this._document.body, script);

        });

    }

    private initMap(): Promise<any> {

        return new Promise((resolve, reject) => {

            Geolocation.getCurrentPosition().then((position) => {

                console.log(position);

                let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                let mapOptions = {
                    center: latLng,
                    zoom: 15
                };

                this.map = new google.maps.Map(this.element.nativeElement, mapOptions);

                var input = /* @type {HTMLInputElement} */(
                    document.getElementById('pac-input'));

                this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

                var searchBox = new google.maps.places.SearchBox(<HTMLInputElement>(input));

                // Listen for the event fired when the user selects an item from the
                // pick list. Retrieve the matching places for that item.
                google.maps.event.addListener(searchBox, 'places_changed', () => {
                    var places = searchBox.getPlaces();

                    if (places.length == 0) {
                        return;
                    }
                    for (var i = 0, marker; marker = this.markers[i]; i++) {
                        marker.setMap(null);
                    }

                    // For each place, get the icon, place name, and location.
                    this.markers = [];
                    var bounds = new google.maps.LatLngBounds();
                    for (var i = 0, place; place = places[i]; i++) {
                        var image = {
                            url: place.icon,
                            size: new google.maps.Size(71, 71),
                            origin: new google.maps.Point(0, 0),
                            anchor: new google.maps.Point(17, 34),
                            scaledSize: new google.maps.Size(25, 25)
                        };

                        // Create a marker for each place.
                        var mark = new google.maps.Marker({
                            map: this.map,
                            icon: image,
                            title: place.name,
                            position: place.geometry.location
                        });

                        this.markers.push(mark);

                        bounds.extend(place.geometry.location);
                    }

                    this.map.fitBounds(bounds);
                });

                // Bias the SearchBox results towards places that are within the bounds of the
                // current map's viewport.
                google.maps.event.addListener(this.map, 'bounds_changed', () => {
                    var bounds = this.map.getBounds();
                    console.log(this.map)
                    searchBox.setBounds(bounds);
                });

                resolve(true);

            }, (err) => {

                reject('Could not initialise map');

            });

        });

    }

    public addMarker(lat: number, lng: number): void {

        let latLng = new google.maps.LatLng(lat, lng);

        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });

        this.markers.push(marker);

    }

}


