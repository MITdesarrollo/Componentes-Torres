import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  alumno: string = '';
  variable1:number = 0;
  listaNombres: any[] = [
    {nombre: 'Lilo', edad:26},
    {nombre: 'Lolo', edad:18},
    {nombre: 'Lalo', edad:20},
    {nombre: 'Lulu', edad:30}
  ] ;

  llamaNombre(value:string){
  }
  agregarAlumno(nombre:string, edad:number){
   const agregar = this.alumno;
   this.listaNombres.push(agregar)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
