import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahtocel'
})
export class FahtocelPipe implements PipeTransform {

  fahval: number = 0;

  transform(value: number): number {
    this.fahval = (value-32)*5/9;
    return this.fahval;
  }

}
