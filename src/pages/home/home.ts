import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pic } from '../../interfaces/pic';
import { HttpClient } from '@angular/common/http';
import { MediaProvider } from '../../providers/media/media';

// import { PhotoViewer } from '@ionic-native/photo-viewer';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  // add this to xyz
  picArray: Pic[] = [];
  mediaPath = 'http://media.mw.metropolia.fi/wbma/uploads/';

  ngOnInit() {
    this.getAllFiles();

  }

  constructor(private http: HttpClient, public navCtrl: NavController,private mediaProvider: MediaProvider) { }

  getAllFiles() {
    this.mediaProvider.getAllmedia().subscribe((data: Pic[]) => {
      console.log('data', data);
      data.forEach((media: Pic) => {
        this.mediaProvider.getSingleMedia(media.file_id).subscribe((file: Pic) => {
          this.picArray.push(file);
        });
      });
      console.log(this.picArray);
    });
  }

  getImages() {
    this.http.get<Pic[]>(this.mediaPath).subscribe(
      (response: Pic[]) => {
        this.picArray = response;
      }
    );
  }
}
