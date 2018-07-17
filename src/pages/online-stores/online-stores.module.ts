import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnlineStoresPage } from './online-stores';

@NgModule({
  declarations: [
    OnlineStoresPage,
  ],
  imports: [
    IonicPageModule.forChild(OnlineStoresPage),
  ],
})
export class OnlineStoresPageModule {}
