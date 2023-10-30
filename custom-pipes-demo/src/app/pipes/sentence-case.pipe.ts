import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCase'
})
export class SentenceCasePipe implements PipeTransform {
  transform(text: string): string {
    if (!text) return '';
    return text.replace(
      /(^\s*|\.\s*)([a-z])/g,
      (_, separator, letter) => separator + letter.toUpperCase()
    );
  }
}
