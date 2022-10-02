import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumnos';
import { Curso } from 'src/app/models/cards';

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
  public cursos: Array<Curso> =[
    {
      img: '../../../assets/images/1.png',
      nombre:'Angular',
      descripcion: ''
    },
    {
      img: '../../../assets/images/2.png',
      nombre:'React',
      descripcion: ''
    },
    {
      img: '../../../assets/images/3.png',
      nombre:'JavaScript',
      descripcion: ''
    }
  ]

  llamaNombre(value: string) {
  }

  constructor() { }

  ngOnInit(): void {
  }

}
