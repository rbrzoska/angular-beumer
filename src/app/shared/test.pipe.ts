import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: number, vatValue: number = 0): string {
    // console.log('transform vat ' + value);
    return `${ value  + value * vatValue}${vatValue ? ' (z VAT)' : ''}`;
  }

}
