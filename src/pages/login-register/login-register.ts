import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { MediaProvider } from '../../providers/media/media';
import { LoginResponse } from '../../interfaces/loginResponse';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login-register',
  templateUrl: 'login-register.html',
})
export class LoginRegisterPage {
  availavleUsername = true; // else it displays that username is not available

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginRegisterPage');
  }

  onLogin(loginForm: NgForm) {
    this.mediaProvider.login(loginForm.value.username, loginForm.value.password).subscribe((response: LoginResponse) => {
      console.log(response);
      localStorage.setItem('token', loginForm.value.token);
      this.navCtrl.push(HomePage);

    }, (error) => {
      console.log(error);
    });
  }
  onCheckUser(username: string) {
    if (username !== ''){
      console.log('username check ' + username)
      this.mediaProvider.checkUserExists(username).subscribe((response) => {
        console.log(response);
        this.availavleUsername = response['available'];
      });
    }
  }
  onRegister(form: NgForm) {

  }



}
