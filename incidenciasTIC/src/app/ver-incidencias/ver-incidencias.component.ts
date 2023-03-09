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

  codUsu:number=0; //esta variable la tenemos que recuperar del opbjeto usuario al logearnos
  incidencias:any=[];


  obtenerIncidenciasUsu() {
    // this.incidenciasService.obtenerIncidenciasUsu(this.codUsu).subscribe(
    //   result => this.incidencias = result
    // );

    this.incidencias[0]={
      fecha:"12-12-12",
      codInc:1,
      tipo:"hardware",
      aula:"2daw",
      estad:"creado"
    }
    this.incidencias[1]={
      fecha:"12-12-12",
      codInc:1,
      tipo:"hardware",
      aula:"2daw",
      estad:"terminado"
    }
    this.incidencias[2]={
      fecha:"12-12-12",
      codInc:1,
      tipo:"hardware",
      aula:"2daw",
      estad:"en proceso"
    }
  }




}
