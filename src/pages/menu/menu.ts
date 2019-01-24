import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginRegisterPage } from '../login-register/login-register';
import { LogoutPage } from '../logout/logout';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loginRegister = LoginRegisterPage;
  logout = LogoutPage;
  menuPage = MenuPage;
}
