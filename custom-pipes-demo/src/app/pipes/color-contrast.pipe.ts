import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorContrast'
})
export class ColorContrastPipe implements PipeTransform {
  transform(backgroundCOlor: string): string {
    if(!backgroundCOlor) {
      return '';
    }

    const red = parseInt(backgroundCOlor.slice(1, 3), 16);
    const green = parseInt(backgroundCOlor.slice(3, 5), 16);
    const blue = parseInt(backgroundCOlor.slice(5, 7), 16);

    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

    return brightness >= 128 ? 'black' : 'white';
  }
}
