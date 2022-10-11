import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tablas-alumnos',
  templateUrl: './tablas-alumnos.component.html',
  styleUrls: ['./tablas-alumnos.component.css']
})
export class TablasAlumnosComponent implements OnInit {


  @Input() usuarios: any[] = [];

  
  constructor() {

  }

  ngOnInit(): void {
  }

  deleteItem(el: number) {
    this.usuarios = this.usuarios.filter(item => item.id !== el)
  }

}
