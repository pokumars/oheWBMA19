import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ThumbnailPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'thumbnail',
})
export class ThumbnailPipe implements PipeTransform {
  baseUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  transform(value: string, sizeOption: string) {
    let thumbnail;
    const fileID = value.split('.')[0];


    switch (sizeOption) {
      case 'small':
        thumbnail = this.baseUrl + fileID + '-tn160.' + 'png';
        break;

      case 'medium':
        thumbnail = this.baseUrl + fileID + '-tn320.' + 'png';
        break;

      case 'large':
        thumbnail = this.baseUrl + fileID + '-tn640.' + 'png';
        break;

      case 'screenshot':
        thumbnail = this.baseUrl + value;
        break;

      default:
        thumbnail = this.baseUrl + fileID + '-tn160.' + 'png';
        break;
    }
    return thumbnail;
  }
}
