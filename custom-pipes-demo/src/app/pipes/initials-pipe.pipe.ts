import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(fullName: string): string {
    if (!fullName) return '';
    const nameParts = fullName.split(' ');
    return nameParts
      .map(namePart => namePart.charAt(0).toUpperCase())
      .join('');
  }
}
