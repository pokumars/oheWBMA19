import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginResponse } from '../../interfaces/loginResponse';


@Component({
  selector: 'page-login-register',
  templateUrl: 'login-register.html',
})
export class LoginRegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginRegisterPage');
  }

  onLogin(form: NgForm) {
    // console.log(form.value);
    console.log('form values received');

    this.authProvider.login(form.value.username, form.value.password).subscribe((response: LoginResponse) => {
      console.log(response);
      localStorage.setItem('token', response.token);
      localStorage.setItem('userId', response.user.user_id.toString());


    },
    (error) => {
      console.log(error);
    });

  }

}
// Retrieve
// localStorage.getItem("lastname");
