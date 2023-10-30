import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'romanNumeral'
})
export class RomanNumeralPipe implements PipeTransform {
  transform(arabicNumber: number): string {
    if (isNaN(arabicNumber) || arabicNumber !== 0 && !arabicNumber) {
      return '';
    }

    if (arabicNumber < 1 || arabicNumber > 3999) {
      return '';
    }

    const romanNumerals = [
      'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'
    ];

    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let roman = '';
    
    for (let i = 0; i < romanNumerals.length; i++) {
      while (arabicNumber >= values[i]) {
        roman += romanNumerals[i];
        arabicNumber -= values[i];
      }
    }

    return roman;
  }
}
