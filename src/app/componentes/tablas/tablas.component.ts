
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';


@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css'],
})
export class TablasComponent implements OnInit {
  filtro: string = '';
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>
  cursosSubscription!: Subscription;


  dataSource!: MatTableDataSource<Curso>
  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta',];

  constructor(
    private cursosService: CursosService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.cursos$ = this.cursosService.obtenerCursos();
    this.cursosSubscription = this.cursos$.subscribe(cursos => this.cursos = cursos) 
  }

  ngOnDestroy(): void {
    this.cursosSubscription.unsubscribe();
  }

  editarCurso(curso: Curso) {
    this.router.navigate(['editar', curso])
  }
  eliminarCurso(id: number) {
    this.cursosService.eliminarCurso(id)
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
