import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pic } from '../../interfaces/pic';
import { HttpClient } from '@angular/common/http';
import { MediaProvider } from '../../providers/media/media';
import { Observable } from 'rxjs/Observable';
import { UploadPage } from '../upload/upload';

// import { PhotoViewer } from '@ionic-native/photo-viewer';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  uploadPage = UploadPage;

  picArray: Observable<Pic[]>;
  mediaPath = 'http://media.mw.metropolia.fi/wbma/uploads/';

  ngOnInit() {
    this.getAllFiles();

  }
  ionViewDidEnter() {
    this.getAllFiles();
  }


  constructor(private http: HttpClient,
              public navCtrl: NavController,
              private mediaProvider: MediaProvider) { }


  getAllFiles() {
    this.picArray = this.mediaProvider.getAllmedia();
    console.log('getAllFiles()');
  }

  /* getImages() {
    this.http.get<Pic[]>(this.mediaPath).subscribe(
      (response: Pic[]) => {
        this.picArray = response;
      }
    );
  } */
}
