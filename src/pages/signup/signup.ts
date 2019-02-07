import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginResponse, RegResponse } from '../../interfaces/loginResponse';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  availableUsername = true;
  passW = '';
  passwordMatch = false;



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authProvider: AuthProvider) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onCheckUsername(username) {
   if (username !== '') {
    console.log('check username ', username);
    this.authProvider.checkUserExists(username).subscribe(
      response => {
        console.log(response);
        this.availableUsername = response['available'];

      }, error => console.log(error));
   }
  }

  onSignup(form: NgForm) {
    // I have made the button disabled until the form is valid.
    // But i will also have it be that it wont be submittable if passwords dont match

    if (this.passwordMatch) {
      this.authProvider.register(form.value.username, form.value.password, form.value.email).subscribe(
        (response: RegResponse) => {
          console.log(response);
          localStorage.setItem('user_id', response.user_id.toString());

          // registered so now login and save the token
          this.successfulSignupLogin(form.value.username, form.value.password);

        }, error => console.log(error));
    } else {console.log('passwords dont match'); }
  }

  successfulSignupLogin(username, password) {
    this.authProvider.login(username, password).subscribe((response: LoginResponse) => {
      console.log(response);
      localStorage.setItem('token', response.token);

      // move to the homepage
      this.navCtrl.setRoot(TabsPage);
    });

  }

  confirmPassword(confPass) {
    if (this.passW !== '') {
      if (this.passW === confPass) {
        // console.log('passwords match');
        this.passwordMatch = true;
      } else {
        // console.log('passwords DO NOT match');
        this.passwordMatch = false;
      }
    }
  }

}
