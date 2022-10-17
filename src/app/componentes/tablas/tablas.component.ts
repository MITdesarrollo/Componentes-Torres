import { HtmlParser } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {
  filtro: string = '';
  cursos!: Curso[];
  
  columnas: string[] = ['nombre','comision','profesor','fechaInicio','fechaFin','inscripcionAbierta']
  
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  
  constructor(
    private cursoService: CursosService
  ) { }

  ngOnInit(): void {
    this.cursos = this.cursoService.obtenerCursos();
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
