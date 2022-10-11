import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apellido'
})
export class ApellidoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return null;
  }

}
