import { NgModule } from '@angular/core';
import { GoogleMapComponent } from './google-map/google-map';
import { GoogleMapSearchComponent } from './google-map-search/google-map-search';
@NgModule({
	declarations: [GoogleMapComponent,
    GoogleMapComponent, GoogleMapSearchComponent],
	imports: [],
	exports: [GoogleMapComponent,
    GoogleMapComponent, GoogleMapSearchComponent]
})
export class ComponentsModule {}
