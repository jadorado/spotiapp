import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noFoto'
})
export class NoFotoPipe implements PipeTransform {

  transform(value: any[]): any {

    let noimage = 'assets/img/noimage.png';

    if(!value) {
      return noimage;
    } else {
      return (value.length > 0 ? value[1].url : noimage);
    }

  }

}
