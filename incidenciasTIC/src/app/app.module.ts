import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CrearIncidenciaComponent } from './crear-incidencia/crear-incidencia.component';
import { GestionarIncidenciaAdmComponent } from './gestionar-incidencia-adm/gestionar-incidencia-adm.component';
import { VerIncidenciasComponent } from './ver-incidencias/ver-incidencias.component';
import { ModIncidenciasAdmComponent } from './mod-incidencias-adm/mod-incidencias-adm.component';

const appRoutes:Routes=[
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"incidenciasUsuarioListar/:codUsu", component:VerIncidenciasComponent},
  {path:"incidenciasUsuarioCrear/:codUsu", component:CrearIncidenciaComponent},
  {path:"modIncidenciasAdmin/:codInci", component:ModIncidenciasAdmComponent},
  {path:"gestionarIncidenciasAdmin", component:GestionarIncidenciaAdmComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearIncidenciaComponent,
    GestionarIncidenciaAdmComponent,
    VerIncidenciasComponent,
    ModIncidenciasAdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
