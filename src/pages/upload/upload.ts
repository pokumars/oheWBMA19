import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';



@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {
  file: File;
  // formData = new FormData();


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private mediaProvider: MediaProvider) {
  }

  upload(form) {
    const fd = new FormData();
    fd.append('description', form.value.description);
    fd.append('title', form.value.title);
    fd.append('file', this.file);
   /*  console.log('description  ', form.value.description);
    console.log('title  ', form.value.title);
    console.log('file  ', this.file);
    console.log('formData', fd); */
    this.mediaProvider.upload(fd).subscribe((response) => {
      console.log(response);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }
  handleChange(event) {
    // console.log(event.target.files[0]);
    this.file = event.target.files[0];
  }

}
