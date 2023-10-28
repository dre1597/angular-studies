import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(items: any[], property: string, filterValue: string): any[] {
    if (!items) return [];

    return items.filter(item => item[property] === filterValue);
  }
}
