import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightText',
  pure: false,
  standalone: true
})
export class HighlightTextPipe implements PipeTransform {

  transform(text: string, highlight: string | null | undefined): string {
    console.log('Highlighting text:', text, 'Highlight:', highlight);
    const highlightTerm = highlight?.toLowerCase() || '';
    if (!highlightTerm) {
      return text;
    }
    const regex = new RegExp(`(${highlightTerm})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  }

}
