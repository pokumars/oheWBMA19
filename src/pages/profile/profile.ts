import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { MediaProvider } from '../../providers/media/media';
import { Pic } from '../../interfaces/pic';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  avatar = '';
  baseUrl = 'https://media.mw.metropolia.fi/wbma/uploads/';
  // fullUrl is what you pass to the pipe so that it can modify and give you different sizes
  fullUrl = this.baseUrl;
  userMail = localStorage.getItem('email');
  username = localStorage.getItem('username');
  myAvatarObj: Pic;


  ngOnInit() {

    /* this method finds the filename of the exact file that is supposed  to be your avatar. Then
     that filename is passed into the pipe in html so that it can be transformed based on the
     given pipe*/
    this.mediaProvider.getAvatar('profile').subscribe((ava: Pic[]) => { // the full avatar list
      ava.filter((a: Pic) => {
        if (a.user_id.toString() === localStorage.getItem('userId')) {
          // this.avatar is added to the sourc in the html image source to find the actual image.
          this.avatar = a.filename;
          console.log('a.filename is ', a.filename);
        }
      });
     // full url is just a test for myself. it does nothing.
      this.fullUrl += this.avatar;
      console.log('the image\'s full url', this.fullUrl);
    }, error => console.log(error));
  }


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    private mediaProvider: MediaProvider,
  ) {}


  onLogout() {
    localStorage.clear();
    // sets login page as root and also moves there
    this.app.getRootNav().setRoot(LoginPage);
  }
}
