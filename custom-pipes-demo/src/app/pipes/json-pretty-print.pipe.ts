import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonPrettyPrint'
})
export class JsonPrettyPrintPipe implements PipeTransform {
  transform(jsonObject: any): string {
    if (!jsonObject) return '';
    return JSON.stringify(jsonObject, null, 2); // 2 spaces for indentation
  }
}
