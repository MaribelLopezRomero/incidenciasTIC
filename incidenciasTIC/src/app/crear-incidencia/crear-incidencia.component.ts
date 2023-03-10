import { Component } from '@angular/core';
import { IncidenciasServiceService } from '../services/incidencias-service.service';

@Component({
  selector: 'app-crear-incidencia',
  templateUrl: './crear-incidencia.component.html',
  styleUrls: ['./crear-incidencia.component.css']
})
export class CrearIncidenciaComponent {

  constructor(private incidenciasServicio: IncidenciasServiceService) {
    this.crearIncidencia();
   }


  altaIncidenciaUsu:any={

    codUsuInc:3,
    fecha:"sdf",
    tipo:"sdf",
    aula:"sdf",
    grupo:"sdf",
    descripcion:"sdf",
    estado: "Creada",
    feedback:" "
  };

  incidenciaOK:any={
    status:false
  }

  crearIncidencia() {
    this.incidenciasServicio.crearIncidencia(this.altaIncidenciaUsu).subscribe(
      result => this.incidenciaOK = result
    );

  }

}
