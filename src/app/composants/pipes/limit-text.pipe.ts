import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText'
})
export class LimitTextPipe implements PipeTransform {

  transform(value: any, max_length?: number): any {
    let result: string = null;
    if(value.length <= 50){
      result = value;
    }else{
      result = value.substring(0, max_length - 3) + '...';
    }
    return result;
  }

}
