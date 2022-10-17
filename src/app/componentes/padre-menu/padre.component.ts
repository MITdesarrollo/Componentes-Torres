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
