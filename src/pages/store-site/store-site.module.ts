import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreSitePage } from './store-site';

@NgModule({
  declarations: [
    StoreSitePage,
  ],
  imports: [
    IonicPageModule.forChild(StoreSitePage),
  ],
})
export class StoreSitePageModule {}
