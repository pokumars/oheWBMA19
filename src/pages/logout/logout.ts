import { Component, EventEmitter, Output } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-logout',
  template: `<p>click to logout</p>
  <button ion-button block large style="margin-top : 20%" (click)='onLogout()'> Logout </button>`,
})
export class LogoutPage {
  @Output() loggedOutEvent = new EventEmitter<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLogout() {
    localStorage.clear()


    this.navCtrl.parent.select(0);
    this.loggedOutEvent.emit();
  }

}
