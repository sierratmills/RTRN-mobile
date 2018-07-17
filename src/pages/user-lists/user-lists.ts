import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { Http } from '@angular/http';
import { MainPage } from '../main/main';

/**
 * Generated class for the UserListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-lists',
  templateUrl: 'user-lists.html',
})
export class UserListsPage {
  public listname = '';
  private id = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.http.get("http://localhost:3000/verify?jwt=" + localStorage.getItem("TOKEN")).subscribe(
      result => {
        var info = result.json();
        this.id = info.user.id;
        console.log(info);
      },

      err => {
        // Invalid, login!
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListsPage');
  }

  createList() {
    this.http
        .post("http://localhost:3000/createlist", {
          name: this.listname,
          userId: this.id,
        }).subscribe(
          result => {
            console.log(result);

            this.goToList();

          },

          err => {
            console.log(err);
          }
        );
        this.navigateToMain();
    }

  navigateToMain() {
    this.navCtrl.push(MainPage);
  }

  goToList() {
    this.navCtrl.push(ListPage);
  }
}
