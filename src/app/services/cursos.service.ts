import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
 private cursos: Curso[] = [
    {
     nombre: 'Angular',
     comision: '32310',
     profesor: 'Keven',
     fechaInicio: new Date(2022, 0, 1),
     fechaFin: new Date(2022, 1, 28),
     inscripcionAbierta: true,
     img:'/assets/images/1.png'
   },
   {
     nombre: 'React JS',
     comision: '32320',
     profesor: 'Fernando',
     fechaInicio: new Date(2022, 2, 1),
     fechaFin: new Date(2022, 3, 30),
     inscripcionAbierta: true,
     img:'/assets/images/2.png'
   },
   {
     nombre: 'JavaScript',
     comision: '33310',
     profesor: 'Arturo',
     fechaInicio: new Date(2022, 1, 1),
     fechaFin: new Date(2022, 3, 28),
     inscripcionAbierta: false,
     img:'/assets/images/3.png'
   },
   {
     nombre: 'Python',
     comision: '34310',
     profesor: 'Lautaro',
     fechaInicio: new Date(2022, 5, 1),
     fechaFin: new Date(2022, 6, 30),
     inscripcionAbierta: false,
     img:'/assets/images/4.png'
   },
   ];
  constructor() { }

  obtenerCursos(): Curso[]{
    return this.cursos; 
  }
  agregarCurso(curso: Curso){

  }
}
