import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class TablasAlumnosComponent implements OnInit, OnDestroy{


  usuarios!: Usuario[];
  usuariosSubcription!: Subscription
  
  constructor(
    private usuarioData: AlumnoService
  ) {}

  ngOnInit(): void {
    this.usuarioData.usuariosData().subscribe(usuario => this.usuarios = usuario);
  }
  ngOnDestroy(): void{
    if(this.usuariosSubcription){
      this.usuariosSubcription.unsubscribe();
    }
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
  deleteItem(i: number) {
    this.usuarios = this.usuarios.filter(item => item.id !== i)
  }
}
