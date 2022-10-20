import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  usuarios: Usuario []=[
    { id:0, nombre:'Juan', apellido:'Gomez', cursos:'React Js'},
    { id:1, nombre:'Juana',  apellido:'Perez', cursos:'Angular'}
   ];

  constructor() { }
  
  obtenerUsuariosPromise(): Promise<Usuario[] | any>{
    return new Promise((resolve, reject) => {
      if(this.usuarios.length > 0){
        resolve(this.usuarios);
      }else{
        reject({
          codigo: 0,
          mensaje: 'No hay cursos disponibles en este momento'
        });
      }
    });
  }



  usuariosData(): Usuario[]{
    return this.usuarios;
  }
}
