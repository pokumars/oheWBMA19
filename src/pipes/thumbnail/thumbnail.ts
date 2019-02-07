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
    const filename = value.split('.')[0];
    // console.log(filename);

    switch (sizeOption) {
      case 'small':
        thumbnail = filename + '-tn160.' + 'png';
        // console.log('filename   ', filename);
        break;

      case 'medium':
        thumbnail = filename + '-tn320.' + 'png';
        break;

      case 'large':
        thumbnail = filename + '-tn640.' + 'png';
        break;

      case 'screenshot':
        thumbnail = value;
        break;

      default:
        thumbnail = filename + '-tn160.' + 'png';
        break;
    }
    // console.log('thumb =      ', thumbnail);
    return thumbnail;
  }
}
