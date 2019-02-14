import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import { Chooser } from '@ionic-native/chooser';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { unescape } from 'querystring';





@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {
  file: File;
  fileType: any; fileData: any; myBlob: any;
  grayscale = 0; brightness = 100; contrast = 100; saturate = 100;
  fd = new FormData();
  title = ''; description = '';
  fileNotReady = true;
  base64Image: string;



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private mediaProvider: MediaProvider,
              public loadingCtrl: LoadingController,
              private chooser: Chooser,
              private camera: Camera) {
  }
  takePicture() {
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        saveToPhotoAlbum: true,
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = 'data:image/jpeg;base64,' + imageData; // refactor imageData to usable form
        this.fileData = this.base64Image; // fileData is source, so make that == base64Image
        this.fileType = 'image'; // necessary clause for the filters to show up
        this.fileNotReady = false; // file is now ready so upload button can be activated
        this.myBlob = this.dataURItoBlob(this.base64Image); // to blob so i can upload
    }, (err) => {
        console.log(err);
    });
  }

  dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    let byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(dataURI.split(',')[1]);
    } else {
      byteString = unescape(dataURI.split(',')[1]);
    }

    // separate out the mime component
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
}

  upload(form) {
    this.fd.append('description', form.value.description);
    this.fd.append('title', form.value.title);
    this.fd.append('file', this.myBlob);

    // Todo: change this condition to if no file selected
    if (form.value.title === '') {
      console.log('empty form wont be submitted');
    } else {
     this.mediaProvider.upload(this.fd).subscribe((response) => {
        console.log(response);
        // wait 2 seconds with spinner && go to home page

        this.presentLoadingDefault();
        console.log(this.fd);
      }, error => console.log(error));
    }
    /*console.log('title  ', form);*/
    // console.log('description  ', form.value.description);
    // console.log('title  ', form.value.title);
    // console.log('file  ', this.file);
    // console.log('formData', this.fd);
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
  resetForm() {
    // remove preview src and filters
    this.fileData = null;
    this.fileType = '';

    // disableButton based on file not being ready
    this.fileNotReady = true;

    // clear the form data
    this.fd.delete('description');
    this.fd.delete('title');
    this.fd.delete('file');

    // clear description
    this.description = '';
    // clear title
    this.title = '';

  }

  showPreview2() {
    // for when we use chooser to get file and blob as img src
    this.chooser.getFile('image/audio/video/')
    .then(file => {
      console.log('showPreview2()');
      this.fileData = file.dataURI;
      console.log('fileData   --> ', this.fileData);
      this.fileNotReady = false;

      this.fileType = file.mediaType.substring(0, 5);
      console.log('file type is ', this.fileType);
      this.myBlob = new Blob([file.data], { type: file.mediaType });
      console.log('end of showPreview2()');
    })
    .catch((error: any) => console.error(error));
  }


}
