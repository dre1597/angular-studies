import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberFormatter'
})
export class PhoneNumberFormatterPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return 'Invalid Format';

    const phone = value.toString().replace(/\D/g, '');

    if (!phone) {
      return 'Invalid Format';
    }

    let formattedPhone = '';

    if (phone.length > 12) {
      formattedPhone = phone.replace(/(\d{2})?(\d{2})?(\d{5})?(\d{4})/, '+$1 ($2) $3-$4');
    } else if (phone.length > 11) {
      formattedPhone = phone.replace(/(\d{2})?(\d{2})?(\d{4})?(\d{4})/, '+$1 ($2) $3-$4');
    } else if (phone.length > 10) {
      formattedPhone = phone.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');
    } else if (phone.length > 9) {
      formattedPhone = phone.replace(/(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3');
    } else if (phone.length > 5) {
      formattedPhone = phone.replace(/^(\d{2})?(\d{4})?(\d{0,4})/, '($1) $2-$3');
    } else if (phone.length > 1) {
      formattedPhone = phone.replace(/^(\d{2})?(\d{0,5})/, '($1) $2');
    } else {
      formattedPhone = phone.replace(/^(\d*)/, '($1)');
    }

    return formattedPhone;
  }
}
