import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgurl'
})
export class ImgurlPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const baseurl: string = 'assets/images/';   //相对于index.html的路径
    return baseurl + value;
  }

}
