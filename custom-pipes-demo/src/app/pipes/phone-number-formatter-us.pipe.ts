import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberFormatterUs'
})
export class PhoneNumberFormatterUsPipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return value;
    
    value = value.replace(/\D/g, '');

    if (value.length !== 10) return value;

    return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
  }
}
