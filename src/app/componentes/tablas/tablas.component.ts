import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {

  cursos: Curso[] = [
    {
      nombre: 'Angular',
      comision: '15',
      profesor: 'Lolo',
      fechaInicio: new Date(2022, 0,1),
      fechaFin: new Date (2022,2,28),
      inscripcionAbierta: false,
      img: 'src/assets/images/1.png'
    },
    {
      nombre: 'React js',
      comision: '25',
      profesor: 'Lalo',
      fechaInicio: new Date(2022, 2,1),
      fechaFin: new Date (2022,3,28),
      inscripcionAbierta: false,
      img: 'src/assets/images/2.png'
    },
    {
      nombre: 'Python',
      comision: '35',
      profesor: 'Lula',
      fechaInicio: new Date(2022, 9,1),
      fechaFin: new Date (2022,10,28),
      inscripcionAbierta: true,
      img: 'src/assets/images/3.png'
    },
    {
      nombre: 'JavaScript',
      comision: '45',
      profesor: 'Lolo',
      fechaInicio: new Date(2022,10,1),
      fechaFin: new Date (2022,11,28),
      inscripcionAbierta: true,
      img:'src/assets/images/4.png'
    }
  ]

  columnas: string[] = ['nombre','comision','profesor','fechaInicio','fechaFin','inscripcionAbierta','acciones']
  
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  
  constructor() { }

  ngOnInit(): void {
  }


  /* metodos filtrado tablas */

  filtrarCurso(){

  }
  filtrarComision(){

  }
}
