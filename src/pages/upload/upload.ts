import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {
  file: File;
  fileData: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private mediaProvider: MediaProvider,
              public loadingCtrl: LoadingController) {
  }

  upload(form) {
    const fd = new FormData();
    fd.append('description', form.value.description);
    fd.append('title', form.value.title);
    fd.append('file', this.file);
    if (form.value.title === '' || !this.file) {
      console.log('empty form wont be submitted');
    } else {
      this.mediaProvider.upload(fd).subscribe((response) => {
        console.log(response);
        // wait 2 seconds with spinner && go to home page
        this.presentLoadingDefault();


      }, error => console.log(error));
    }
   /*  console.log('description  ', form.value.description);
    console.log('title  ', form.value.title);
    console.log('file  ', this.file);
    console.log('formData', fd); */
  }

  presentLoadingDefault() {
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {

      this.navCtrl.pop();
    }, 2000);

    setTimeout(() => {

      loading.dismiss();
    }, 3000);
  }

  showPreview() {
    const reader = new FileReader();

    reader.onloadend = (evt) => {
        this.fileData = reader.result;

    };
    reader.readAsDataURL(this.file);
}




  handleChange(event) {
    // console.log(event.target.files[0]);
    this.file = event.target.files[0];

    this.showPreview();
  }

}
