import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'csvToArray'
})
export class CsvToArrayPipe implements PipeTransform {
  transform(csvData: string): string[] {
    if(!csvData) {
      return [];
    }
    return csvData.split(',');
  }
}
