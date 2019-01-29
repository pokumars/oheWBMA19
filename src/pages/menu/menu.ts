import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LogoutPage } from '../logout/logout';
import { LoginRegisterPage } from '../login-register/login-register';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-menu',
  template: `
  <ion-tabs>
    <ion-tab [root]="homePage" tabIcon="home" ></ion-tab>
    <ion-tab [root]="loginRegTab" tabTitle="Login/Register"></ion-tab>
    <ion-tab [root]="logoutTab" tabTitle="Logout"></ion-tab>
 </ion-tabs>
 `,
})
export class MenuPage {
  homePage = HomePage;
  loginRegTab = LoginRegisterPage;
  logoutTab = LogoutPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
