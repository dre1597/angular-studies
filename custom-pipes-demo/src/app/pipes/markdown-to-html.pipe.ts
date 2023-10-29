import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as marked from 'marked';

@Pipe({
  name: 'markdownToHtml'
})
export class MarkdownToHtmlPipe implements PipeTransform {

  private readonly sanitizer = inject(DomSanitizer);
  transform(markdown: string): SafeHtml {
    if (!markdown) return '';
    return this.sanitizer.bypassSecurityTrustHtml(marked.parse(markdown));
  }
}
