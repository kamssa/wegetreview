import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refoidirOmelettePipe'
})
export class RefoidirOmelettePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
