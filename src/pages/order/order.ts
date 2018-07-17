import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})

export class OrderPage {

  public storename = '';
  public date = '';
  private id = '';
  public pricetotal = '';
  public itemname = '';

  public inputs = [
    { 
      label: 'Item 1',
      value: '',
    },
  ];

  public num;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.http.get("https://rtrn.herokuapp.com/verify?jwt=" + localStorage.getItem("TOKEN")).subscribe(
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

  addInputs() {
    this.num = this.inputs.length + 1;
    this.inputs.push({
      label: 'Item ' + this.num,
      value: '',
    });
   // this.createItem();
  }

  createOrder() {
    this.http
        .post("https://rtrn.herokuapp.com/createorder", {
          store: this.storename,
          date: this.date,
          userid: this.id,
          price: this.pricetotal,
        }).subscribe(
          result => {
            var info = result.json();
            this.id = info.orderid;
            console.log(result);
          },

          err => {
            console.log(err);
          }
        );
    }

  createItem(name: string) {
    this.http
        .post("https://rtrn.herokuapp.com/createitem", {
          storename: this.storename,
          itemname: name,
          orderid: this.id,
        }).subscribe(
          result => {
            console.log(result);
          },

          err => {
            console.log(err);
          }
        );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

}
