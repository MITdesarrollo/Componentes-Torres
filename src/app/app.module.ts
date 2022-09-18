import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { StudentsComponent } from './componentes/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavBarComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
