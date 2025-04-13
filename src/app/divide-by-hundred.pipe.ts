import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divideByHundred'
})
export class DivideByHundredPipe implements PipeTransform {

  transform(value: number | undefined): number {
    if (value === undefined) return 0; 
    return value / 100;
  }

}
