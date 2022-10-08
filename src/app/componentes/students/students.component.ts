import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumnos';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  alumno: string = '';
  variable1: number = 0;

  public alumnos: Array<Alumno> = [
    {
      id: 1,
      nombre: 'Lilo',
      cursos: ['React', ' Angular']
    },
  
  ];
  

  llamaNombre(value: string) {
  }

  constructor() { }

  ngOnInit(): void {
  }

}
