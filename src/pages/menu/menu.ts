import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginRegisterPage } from '../login-register/login-register';
import { LogoutPage } from '../logout/logout';


@Component({
  selector: 'page-menu',
  template: `
  <ion-tabs>
  <ion-tab [root]="homeTab" tabIcon="home" tabTitle="Home"></ion-tab>
  <ion-tab *ngIf="!isLoggedIn" [root]="loginRegTab" tabTitle="Login/Register"></ion-tab>
  <ion-tab *ngIf="isLoggedIn" [root]="logoutTab" tabTitle="Logout"></ion-tab>
</ion-tabs>`,
})
export class MenuPage implements OnInit{

  homeTab = HomePage;
  loginRegTab = LoginRegisterPage;
  logoutTab = LogoutPage;

  isLoggedIn: boolean;
  ngOnInit() {

    this.isLoggedIn = localStorage.getItem('token') ? true : false;

    console.log('logged in ', this.isLoggedIn);


  }

}
