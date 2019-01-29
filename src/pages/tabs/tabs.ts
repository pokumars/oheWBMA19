import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  template: `<ion-tabs>
  <ion-tab [root]="homeTab" tabIcon="home" tabTitle="Home" tabIcon="image"></ion-tab>
  <ion-tab [root]="profileTab" tabIcon="home" tabTitle="Profile" tabIcon="person"></ion-tab>
</ion-tabs>`
})
export class TabsPage {
  profileTab = ProfilePage;
  homeTab = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
