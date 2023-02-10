import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { ConsultaAlumnosComponent } from './components/consulta-alumnos/consulta-alumnos.component';
import { CrudAlumnosComponent } from './components/crud-alumnos/crud-alumnos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ModuleMaterialModule} from './modules/module-material/module-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { NyaPipe } from './pipes/nya.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ConsultaAlumnosComponent,
    CrudAlumnosComponent,
    NyaPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModuleMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
