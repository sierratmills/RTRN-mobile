import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NewAccountPage } from '../new-account/new-account';
import 'rxjs/add/operator/map';
import { MainPage } from '../main/main';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any;

  constructor(public navCtrl: NavController, public http: Http) {
    if (localStorage.getItem("TOKEN")) {
    
      this.http.get("https://rtrn.herokuapp.com/verify?jwt=" + localStorage.getItem("TOKEN")).subscribe(
        result => {
          console.log(result.json());
        },
  
        err => {
          // Invalid, login!
        }
      );

    }
  }

  navigateThere() {
    this.navCtrl.push(MainPage);
  }

  navigateToLogin() {
    console.log("Navigating..");
    this.navCtrl.push(LoginPage);
  }

  navigateToNewAccount() {
    console.log("Navigating..");
    this.navCtrl.push(NewAccountPage);
  }

}
