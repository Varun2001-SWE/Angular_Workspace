import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'realTime',
  pure: false,
})
export class RealTimePipe implements PipeTransform {

  transform(value: any): string {
    const now = new Date();
    return now.toLocaleTimeString();
  }

}
