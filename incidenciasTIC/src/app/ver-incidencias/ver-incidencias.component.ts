//
//
// INCIDENCIAS DE CADA USUARIO



import { Component } from '@angular/core';
import { IncidenciasServiceService } from '../services/incidencias-service.service';


@Component({
  selector: 'app-ver-incidencias',
  templateUrl: './ver-incidencias.component.html',
  styleUrls: ['./ver-incidencias.component.css']
})
export class VerIncidenciasComponent {

  constructor(private incidenciasService: IncidenciasServiceService) {
    this.obtenerIncidenciasUsu();
   }

  codUsu:number=3; //esta variable la tenemos que recuperar del opbjeto usuario al logearnos
  incidencias:any=[];


  obtenerIncidenciasUsu() {
    this.incidenciasService.obtenerIncidenciasUsus(this.codUsu).subscribe(
      result => this.incidencias = result
    );
    console.log("hfhf");

  }




}
