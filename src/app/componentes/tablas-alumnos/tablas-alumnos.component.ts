import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/models/usuario';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-tablas-alumnos',
  templateUrl: './tablas-alumnos.component.html',
  styleUrls: ['./tablas-alumnos.component.css']
})
export class TablasAlumnosComponent implements OnInit {


  usuarios!: Usuario[];

  
  constructor(
    private usuarioData: AlumnoService
  ) {}

  ngOnInit(): void {
    this.usuarios = this.usuarioData.usuariosData();
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

 // delete de la fila por id
  deleteItem(el: number) {
    this.usuarios = this.usuarios.filter(item => item.id !== el)
  }
}
