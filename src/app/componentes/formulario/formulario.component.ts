import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  
  //vars
  usuarios!: Usuario[];
  
  formulario = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    cursos: new FormArray([new FormControl()])
  });

  constructor(
    //firma del constructor, parametros//
    private formService: FormularioService,
    private formBuilder: FormBuilder
  ) { 


  }

  ngOnInit(): void {
    this.usuarios = this.formService.usuariosData();
  }


  agregarUsuario($event: any): void{
     let i:number= 0;
     for(let item of this.usuarios){ i++ } 
     $event.id = i
     this.usuarios.push($event) 
    }
    

  //declaracion metodo submit
  submitForm(): void{
    this.agregarUsuario(this.formulario.value);
    this.formulario.reset()
  }
  
  get cursos(): FormArray {
    return this.formulario.get('cursos') as FormArray;
  }

  agregarCurso(): void{
   this.cursos.push(new FormControl());
  }
  


  

}
