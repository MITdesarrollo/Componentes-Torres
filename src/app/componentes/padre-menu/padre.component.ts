import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
 
  usuarios: Usuario []=[
  { id:0, nombre:'Juan', apellido:'Gomez', cursos:'React Js'},
  { id:1, nombre:'Juana',  apellido:'Perez', cursos:'Angular'}
 ];
 
 cursos: Curso[] = [
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

  ngOnInit(): void {
  }

// funcion para asignarle un id a evento recibido y pushearlo al array que recibe el hijo
  agregarUsuario($event: any): void{
    let i:number= 0;
     for(let item of this.usuarios){
      i++
     }
    $event.id = i
    this.usuarios.push($event)  
  }
}
