import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarCursoComponent } from "./componentes/agregar-curso/agregar-curso.component";
import { FormularioComponent } from "./componentes/formulario/formulario.component";

import { TablasComponent } from "./componentes/tablas/tablas.component";

const rutas: Routes = [
    /* ruta-componente */
    
    {path: 'cursos', children:[
      {path:'lista', component: TablasComponent},
      {path:'nuevo', component: AgregarCursoComponent},
      {path: 'alumnos',component: FormularioComponent}
    ]}
]


@NgModule({
     imports:[
        RouterModule.forRoot(rutas)
     ],
     exports:[
        RouterModule
     ]
})



export class AppRoutingModule{}