import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { Http } from '@angular/http';

/**
 * Generated class for the UserprofPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userprof',
  templateUrl: 'userprof.html',
})
export class UserprofPage {

  public firstname = '';
  public lastname= '';
  public email= '';
  public username= '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get("https://rtrn.herokuapp.com/verify?jwt=" + localStorage.getItem("TOKEN"))
    .subscribe(
      result => {
        var info = result.json();
        if (navParams.get('firstname')!=''){
          this.firstname = navParams.get('firstname');
        } else this.firstname = info.user.firstname;
        if (navParams.get('lastname')!=''){
          this.lastname = navParams.get('lastname');
        } else this.lastname = info.user.lastname;
        if (navParams.get('email')!=''){
          this.email = navParams.get('email');
        } else this.email = info.user.email;
        if (navParams.get('username')!=''){
          this.username = navParams.get('username');
        } this.username = info.user.username;
        console.log(info);
      },

      err => {
        // Invalid, login!
      }
    );
  }

  logOut() {
    this.navCtrl.setRoot(HomePage);
  }

  navigateToProfile() {
    console.log("Navigating..");
    this.navCtrl.push(ProfilePage);
  }

  navigateToHomePage() {
    console.log("Navigating..");
    this.navCtrl.push(HomePage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserprofPage');
  }

}
