import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
// import { LoginRegisterPage } from '../login-register/login-register';
import { LogoutPage } from '../logout/logout';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-menu',
  template: `
  <ion-tabs>
  <ion-tab [root]="homeTab" tabIcon="home" tabTitle="Home"></ion-tab>
  <ion-tab *ngIf="!isLoggedIn" [root]="loginPage" tabTitle="Login/Register"></ion-tab>
  <ion-tab *ngIf="isLoggedIn" [root]="logoutTab" tabTitle="Logout" (loggedOutEvent)="onDidLogout()"></ion-tab>
</ion-tabs>`,
})
export class MenuPage implements OnInit {


  homeTab = HomePage;
  // loginRegTab = LoginRegisterPage;
  loginPage = LoginPage;
  logoutTab = LogoutPage;

  isLoggedIn: boolean;
  ngOnInit() {
    this.checkLoginState();
  }

  onDidLogout() {
    this.checkLoginState();
  }

  checkLoginState() {
    this.isLoggedIn = localStorage.getItem('token') ? true : false;
    console.log('logged in ', this.isLoggedIn);
  }
}
