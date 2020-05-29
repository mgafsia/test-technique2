import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertFtoC'
})
export class ConvertFtoCPipe implements PipeTransform {
  transform(value: number): number {
    if (!value) return;
    return ((value - 32) * (5/9));
  }
}
