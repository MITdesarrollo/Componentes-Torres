import { HtmlParser } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {
  filtro: string = '';
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
  
  columnas: string[] = ['nombre','comision','profesor','fechaInicio','fechaFin','inscripcionAbierta']
  
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  
  constructor() { 
    
    
  }

  ngOnInit(): void {
  }


  /* metodos filtrado tablas */

  filtrarCurso(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;

    /* columna en especifico , filterPredicate lleva dos parametros*/
    this.dataSource.filterPredicate = function(curso:Curso, filtro: string){
      return curso.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
    };

    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }
  filtrarComision(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    
    
    this.dataSource.filterPredicate = function(curso:Curso, filtro: string){
      return curso.comision.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
    };

    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }

  
  
}
