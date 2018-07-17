import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { MainPage } from '../main/main';

/**
 * Generated class for the OrderhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderhistory',
  templateUrl: 'orderhistory.html',
})
export class OrderhistoryPage {

  public userid;
  public orderid;
  public orders = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.http.get("https://rtrn.herokuapp.com/verify?jwt=" + localStorage.getItem("TOKEN")).subscribe(
      result => {
        var info = result.json();
        this.userid = info.user.id;
        console.log(info);
      },

      err => {
        // Invalid, login!
      }
    );
    
    this.http.get("https://rtrn.herokuapp.com/orderhistory", this.userid).subscribe(
      result => {
        var info = result.json();
        this.orders = info;
        console.log(info);
      //  this.orderdate = info.date;
      //  this.orderstore = info.store;
      },

      err => {
        // Invalid, login!
      }
    );

  }

  navigateToMain() {
    this.navCtrl.push(MainPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderhistoryPage');
  }

}
