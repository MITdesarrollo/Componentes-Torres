import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-tablas-alumnos',
  templateUrl: './tablas-alumnos.component.html',
  styleUrls: ['./tablas-alumnos.component.css']
})
export class TablasAlumnosComponent implements OnInit {


  @Input() usuarios: Usuario[] = [];

  
  constructor() {}

  ngOnInit(): void {
  }
  
 // delete de la fila por id
  deleteItem(el: number) {
    this.usuarios = this.usuarios.filter(item => item.id !== el)
  }
}
