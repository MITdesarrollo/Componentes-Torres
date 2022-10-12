import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() addUsuario: EventEmitter<any> = new EventEmitter<any>();
  //vars

  formulario = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    cursos: new FormArray([new FormControl()])
  });

  constructor(
    //firma del constructor, parametros//

    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  //declaracion metodo submit
  submitForm(): void{
    this.addUsuario.emit(this.formulario.value);
    this.formulario.reset()
  }
  
  get cursos(): FormArray {
    return this.formulario.get('cursos') as FormArray;
  }

  agregarCurso(): void{
   this.cursos.push(new FormControl());
  }

  

}
