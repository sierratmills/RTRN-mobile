import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserListsPage } from './user-lists';

@NgModule({
  declarations: [
    UserListsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserListsPage),
  ],
})
export class UserListsPageModule {}
