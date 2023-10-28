import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(text: string, limit: number): string {
    if(!text || text.length <= limit) {
      return text;
    }
    return text.substring(0, limit) + '...';
  }
}
