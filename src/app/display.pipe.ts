import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'display'
})
export class DisplayPipe implements PipeTransform {

  transform(value:number | undefined, factor :number , factor2: number): number| string {
    if (value === undefined) {
      return 0;
    }
    if (value >= factor2 && value <= factor ) {
      return "True" + " = " +  value;
    }
    else {
      return "False" + " = " +  value;
    }

  }
}
