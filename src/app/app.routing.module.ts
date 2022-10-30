import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarCursoComponent } from "./componentes/agregar-curso/agregar-curso.component";
import { DetalleCursoComponent } from "./componentes/detalle-curso/detalle-curso.component";
import { EditarCursoComponent } from "./componentes/editar-curso/editar-curso.component";
import { FormularioComponent } from "./componentes/formulario/formulario.component";

import { TablasComponent } from "./componentes/tablas/tablas.component";

const rutas: Routes = [
    /* ruta-componente */
    
    
    {path:'lista', component: TablasComponent},
    {path:'nuevo', component: AgregarCursoComponent},
    {path:'editar', component: EditarCursoComponent},
    {path:':id', component: DetalleCursoComponent}
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