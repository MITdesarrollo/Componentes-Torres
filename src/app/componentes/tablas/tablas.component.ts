import { HtmlParser } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css'],
})
export class TablasComponent implements OnInit {
  filtro: string = '';
  /* cursos!: Curso[]; */
  cursos$!: Observable<Curso[]>

  dataSource!: MatTableDataSource<Curso>
  columnas: string[] = ['nombre','comision','profesor','fechaInicio','fechaFin','inscripcionAbierta',];
 
  constructor(
     private cursosService: CursosService 
       
    ) { 
    /*   console.log('paso 1'); */
      /* paso 2 */
      /* cursosService.obtenerCursosPromise().then((valor: Curso[]) =>{
        
         this.cursos = valor;
         console.log(this.cursos);
         this.dataSource = new MatTableDataSource<Curso>(this.cursos);
      }).catch((error: any)=> {
        console.error(error);
      });
      console.log('paso 3');
      } */
    }
    
  ngOnInit(): void {
     this.cursos$ = this.cursosService.obtenerCursos();
  }

 


  /* metodos filtrado tablas */
  filtrarCurso(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;

    /* columna en especifico , filterPredicate lleva dos parametros*/
    this.dataSource.filterPredicate = function (curso: Curso, filtro: string) {
      return curso.nombre
        .toLocaleLowerCase()
        .includes(filtro.toLocaleLowerCase());
    };

    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }
  filtrarComision(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;

    this.dataSource.filterPredicate = function (curso: Curso, filtro: string) {
      return curso.comision
        .toLocaleLowerCase()
        .includes(filtro.toLocaleLowerCase());
    };

    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }
}
