import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  promesa: any;
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
    private alumnoService: AlumnoService,
    private formBuilder: FormBuilder
  ) { 
    this.promesa = alumnoService.obtenerUsuariosPromise()
     .then((valor: Usuario[]) => {
       console.log('Desde el promise', valor);
       this.usuarios = valor;
    }).catch((error: any) => {
       console.error(error);
    });
  }

  ngOnInit(): void {
    this.usuarios = this.alumnoService.usuariosData();
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
