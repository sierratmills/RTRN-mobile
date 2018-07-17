import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchResultMapPage } from './search-result-map';

@NgModule({
  declarations: [
    SearchResultMapPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchResultMapPage),
  ],
})
export class SearchResultMapPageModule {}
