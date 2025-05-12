import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double'
})
export class DoublePipe implements PipeTransform {

  transform(value: number | undefined, factor : number = 2): number | undefined {
    if (value === undefined) return undefined;
    return value * factor;
  }

}
