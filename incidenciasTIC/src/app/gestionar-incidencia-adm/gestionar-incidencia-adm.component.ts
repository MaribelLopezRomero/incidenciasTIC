import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IncidenciasServiceService } from '../services/incidencias-service.service';

@Component({
  selector: 'app-gestionar-incidencia-adm',
  templateUrl: './gestionar-incidencia-adm.component.html',
  styleUrls: ['./gestionar-incidencia-adm.component.css']
})
export class GestionarIncidenciaAdmComponent {

  constructor(private router:Router, private incidenciasServicio: IncidenciasServiceService) {
    this.obtenerIncidencias();
   }


  incidencias:any=[];

  obtenerIncidencias() {
    this.incidenciasServicio.obtenerIncidencias().subscribe(
      result => this.incidencias = result
    );

  }

  gestionarIncidencias(i: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: { descripcion: this.incidencias[i].descripcion }
    };
    this.router.navigate(['/modIncidenciasAdmin', this.incidencias[i].codInci], navigationExtras);
  }

  navegarLogin(){
    this.router.navigate(['']);
  }

}
