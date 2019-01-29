import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, App } from "ionic-angular";
import { LoginPage } from "../login/login";

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {}

  onLogout() {
    localStorage.clear();
    // sets login page as root and also moves there
    this.app.getRootNav().setRoot(LoginPage);
  }

}
