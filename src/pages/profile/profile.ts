import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { Http } from "../../../node_modules/@angular/http";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public firstname = '';

  public lastname = '';

  public username = '';

  public email = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  navigateToProfile() {
    console.log("Navigating..");
    this.navCtrl.pop();
  }

  ok(){
    this.http
        .put("https://rtrn.herokuapp.com/editprofile?jwt=" + localStorage.getItem("TOKEN"), {
          email: this.email,
          firstname: this.firstname,
          lastname: this.lastname,
          username: this.username
        })
        .subscribe(
          result => {
            console.log(result);
            this.navigateToProfile();

          },

          err => {
            var errObject = err.json();
            if (errObject.message === 'username already taken') {
              this.showToastUsernameTaken();
            } else if (errObject.message === 'email already taken') {
              this.showToastEmailTaken();
            } 
            console.log(err);
          }
        );
  }

  showToastUsernameTaken() {
    let toast = this.toastCtrl.create({
      message: "That username is already taken, please choose another username.",
      showCloseButton: true,
      position: "middle"
    });
    toast.present();
  }

  showToastEmailTaken() {
    let toast = this.toastCtrl.create({
      message: "That email is being used by another account, please choose another email.",
      showCloseButton: true,
      position: "middle"
    });
    toast.present();
  }

}
