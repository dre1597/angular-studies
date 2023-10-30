import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanizeDuration'
})
export class HumanizeDurationPipe implements PipeTransform {
  transform(durationInSeconds: number): string {
    if (isNaN(durationInSeconds)) return '';
    if (durationInSeconds !== 0 && !durationInSeconds) return '';

    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);

    let result = '';
    if (hours > 0) {
      result += `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
    }
    if (minutes > 0) {
      if (result) result += ' and ';
      result += `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
    }

    return result || '0 minutes';
  }
}
