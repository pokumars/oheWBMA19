import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-logout',
  template: `<button ion-button block large style="margin-top : 100%" (click)='onLogout()'> Logout </button>`,
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

  }


}
