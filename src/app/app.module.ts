import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { StudentsComponent } from './componentes/students/students.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { TablasComponent } from './componentes/tablas/tablas.component';
import { PadreComponent } from './componentes/padre/padre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CardsComponent } from './componentes/cards/cards.component';
import { BooleanoTextoPipe } from './pipes/booleano-texto.pipe';
import { BooleanoEstiloDirective } from './directives/booleano-estilo.directive';
import { FiltroCursosPipe } from './pipes/filtro-cursos.pipe';
import { TablasAlumnosComponent } from './componentes/tablas-alumnos/tablas-alumnos.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavBarComponent,
    StudentsComponent,
    FormularioComponent,
    TablasComponent,
    PadreComponent,
    CardsComponent,
    BooleanoTextoPipe,
    BooleanoEstiloDirective,
    FiltroCursosPipe,
    TablasAlumnosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
