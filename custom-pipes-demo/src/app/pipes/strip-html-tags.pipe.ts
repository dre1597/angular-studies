import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtmlTags'
})
export class StripHtmlTagsPipe implements PipeTransform {
  transform(html: string): string {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '');
  }
}
