import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pic } from '../../interfaces/pic';
import { HttpClient } from '@angular/common/http';

// import { PhotoViewer } from '@ionic-native/photo-viewer';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  // add this to xyz
  picArray: Pic[] = [];
  mediaPath = 'http://media.mw.metropolia.fi/wbma/media/';

  ngOnInit() {
    this.getImages();
  }

  constructor(private http: HttpClient, public navCtrl: NavController) {
  }

  getImages() {
    this.http.get<Pic[]>(this.mediaPath).subscribe(
      (response: Pic[]) => {
        this.picArray = response;
        console.log(response);
      }
    );

  }
}
