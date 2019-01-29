import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { NgForm } from '@angular/forms';
import { LoginResponse } from '../../interfaces/loginResponse';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  signUpPage = SignupPage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider) {
  }


  onLogin(form: NgForm) {
    // console.log(form.value);
    console.log('form values received');

    this.authProvider.login(form.value.username, form.value.password).subscribe((response: LoginResponse) => {
      console.log(response);
      localStorage.setItem('token', response.token);
      localStorage.setItem('userId', response.user.user_id.toString());

      // sets tabs page as root and also moves there
      this.navCtrl.setRoot(TabsPage);

    },
    (error) => {
      console.log(error);
    });

  }

}
