import { List } from "./list";
import { Order } from "./order";
import { Item } from "ionic-angular/umd";

export class User {
  private firstname: String;
  private lastname: String;
  private username: String;
  private email: String;
  private image: String;
  private payment: String;
  private password: String;
  private userLists: Array<List>;
  private userHistory: Array<Order>;
  private cart: Array<Item>;

  constructor(fn: String, ln: String, un: String, em: String, im: String, pay: String, pas: String) {
    this.firstname = fn;
    this.lastname = ln;
    this.username = un;
    this.email = em;
    this.image = im;
    this.payment = pay;
    this.password = pas;
  }

  getFirstName(): String {
    return this.firstname;
  }

  getLastName(): String {
    return this.lastname;
  }

  getPassword(): String {
    return this.password;
  }

  getUsername(): String {
    return this.username;
  }

  getEmail(): String {
    return this.email;
  }

  getImage(): String {
    return this.image;
  }

}
