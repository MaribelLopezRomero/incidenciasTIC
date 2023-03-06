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
    this.incidenciasServicio.obtenerIncidencias().subscribe(
      result => this.incidencias = result
    );
  }

}
