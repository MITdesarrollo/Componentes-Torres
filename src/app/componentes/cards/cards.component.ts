import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  /* @Input() cursos: Curso[] = [] */
    
  constructor() { }

  ngOnInit(): void {
  }

}
