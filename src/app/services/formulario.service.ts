import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  usuarios: Usuario []=[
    { id:0, nombre:'Juan', apellido:'Gomez', cursos:'React Js'},
    { id:1, nombre:'Juana',  apellido:'Perez', cursos:'Angular'}
   ];

  constructor() { }

  usuariosData(): Usuario[]{
    return this.usuarios;
  }
}
