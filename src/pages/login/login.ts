import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { NewAccountPage } from '../new-account/new-account';
import { MainPage } from '../main/main';
import { UserprofPage } from '../userprof/userprof';
import { Http } from "../../../node_modules/@angular/http";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  public email = '';

  public password = '';

  constructor(public navCtrl: NavController, public toastCtrl:ToastController, private http: Http) { 

  }

  navigateToUserProfile() {
    console.log("Navigating..");
    this.navCtrl.push(UserprofPage);
  }

  navigateToMain() {
    console.log("Navigating..");
    this.navCtrl.push(MainPage);
  }

  navigateToNewAccount() {
    console.log("Navigating..");
    this.navCtrl.push(NewAccountPage);
  }

  login() {
    // this.http
    //   .post("https://rtrn.herokuapp.com/login", {
    //     email: this.email,
    //     password: this.password
    //   })
    //   .subscribe(
    //     result => {
    //       console.log(result);

    //       var jwtResponse = result.json();
    //       var token = jwtResponse.token;

    //       localStorage.setItem("TOKEN", token);

    //       let t = localStorage.getItem("TOKEN");
    //       this.navigateToMain();
    //     },

    //     err => {
    //       this.showToastIncorrectLogin();
    //       console.log(err);
    //     }
    //   );    
    this.navigateToMain();
    //if user exists then make a user and call profile.setInfo() and navigateToMain()
  }

  checkUserExists(): boolean {
    //check to see if user is in database
    return true;
  }

  correctPassword(): boolean {
    //check if password is correct
    return true;
  }

  showToastIncorrectLogin() {
    let toast = this.toastCtrl.create({
      message: "The email or password you entered is not correct. Please try again",
      showCloseButton: true,
      position: "middle"
    });
    toast.present();
  }

}