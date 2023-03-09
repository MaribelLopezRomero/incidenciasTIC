import { Component } from '@angular/core';
import { IncidenciasServiceService } from '../services/incidencias-service.service';

@Component({
  selector: 'app-gestionar-incidencia-adm',
  templateUrl: './gestionar-incidencia-adm.component.html',
  styleUrls: ['./gestionar-incidencia-adm.component.css']
})
export class GestionarIncidenciaAdmComponent {

  constructor(private incidenciasServicio: IncidenciasServiceService) {
    this.obtenerIncidencias();
   }


  incidencias:any=[];

  obtenerIncidencias() {
    // this.incidenciasServicio.obtenerIncidencias().subscribe(
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
