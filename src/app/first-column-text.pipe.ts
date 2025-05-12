import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstColumnText'
})
export class FirstColumnTextPipe implements PipeTransform {

  transform(row:any, columns : {header: string, field: string}[]): string {
    if (!row || !columns || columns.length === 0) {
      return 'None';
    }
    const firstColumnField = columns[0].field;
    return row[firstColumnField] || 'None';
  }

}
