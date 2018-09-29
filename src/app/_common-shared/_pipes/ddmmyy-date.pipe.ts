import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ddmmyyDate'
})
export class DdmmyyDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
      const date = value;
      let days: string;
      let months: string;
      let years: string;
      if (date.getDate() < 10) {
        days = '0' + date.getDate().toString();
      } else {
        days = date.getDate().toString();
      }
      if (date.getMonth() < 10) {
        months = '0' + (date.getMonth() + 1).toString();
      } else {
        months = (date.getMonth() + 1).toString();
      }
      if (date.getFullYear() < 10) {
        years = '0' + date.getFullYear().toString();
      } else {
        years = date.getFullYear().toString();
      }
      return days + '/' + months + '/' + years;
  }
}
