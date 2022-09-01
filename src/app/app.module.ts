import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoComponent } from './Vistas/juego/juego.component';
import { EdadesComponent } from './Vistas/edades/edades.component';
import { LoginComponent } from './LoginC/login/login.component';
import { BienvenidoComponent } from './LoginC/bienvenido/bienvenido.component';
import { ErrorComponent } from './LoginC/error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    EdadesComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //hace el cambhio de ts  y html automatico <input type="text" [(ngModel)]="apellido">
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
