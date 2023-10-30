import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayShuffle'
})
export class ArrayShufflePipe implements PipeTransform {
  transform(array: any[]): any[] {
    if(!array) return array;

    let currentIndex = array.length;
    let randomIndex;
    let tempValue;

    while(currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }

    return array;
  }
}
