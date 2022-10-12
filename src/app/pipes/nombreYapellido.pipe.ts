import { Pipe, PipeTransform } from '@angular/core';
import {Usuario} from '../models/usuario'
@Pipe({
  name: 'nombreYapellido'
})
export class ApellidoPipe implements PipeTransform {
/* pipe personalizado */
  transform(value: Usuario): string{

    return `${value.nombre} ${value.apellido}` ;
  }
}
