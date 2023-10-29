import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentChange'
})
export class PercentChangePipe implements PipeTransform {
  public transform(currentValue: number, previousValue: number): string {
    if (currentValue !== 0 && !currentValue) return '';
    if (previousValue !== 0 && !previousValue) return '';
    if (isNaN(currentValue) || isNaN(previousValue)) {
      return '';
    }

    if (currentValue === previousValue) {
      return '0.00%';
    }

    const percentChange = (((currentValue - previousValue) / Math.abs(previousValue)) * 100).toFixed(2);

    if (percentChange === 'Infinity') {
      return '+100.00%';
    } else if (percentChange === '-Infinity') {
      return '-100.00%';
    } else if ( +percentChange > 0 ) {
      return '+' + percentChange + '%';
    }
    return percentChange + '%';
  }
}
