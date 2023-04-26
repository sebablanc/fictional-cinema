import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date, separator: '/'|'-'): unknown {
    const dateObj = new Date(value);
    let day = (dateObj.getDate() < 10 ? '0' : '') + dateObj.getDate();
    let month = (dateObj.getMonth() < 10 ? '0' : '') + (dateObj.getMonth()+1);
    if(separator === '/'){
      return day + '/' + month + '/' + dateObj.getFullYear();
    } else {
      return dateObj.getFullYear() + '-' + month + '-' + day;
    }
  }

}
