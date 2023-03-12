import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { IncidenciasServiceService } from '../services/incidencias-service.service';

@Component({
  selector: 'app-gestionar-incidencia-adm',
  templateUrl: './gestionar-incidencia-adm.component.html',
  styleUrls: ['./gestionar-incidencia-adm.component.css'],
})
export class GestionarIncidenciaAdmComponent {
  constructor(
    private router: Router,
    private incidenciasServicio: IncidenciasServiceService
  ) {
    this.obtenerIncidencias();
  }

  incidenciasTotal: any = [];
  incidencias: any = [];

  estadoSeleccionado = '';
  estado = '';
  obtenerIncidencias() {
    // this.incidenciasServicio.obtenerIncidencias().subscribe(
    //   result => this.incidencias = result
    // );

    this.incidenciasServicio
      .obtenerIncidencias()
      .subscribe((result) => (this.incidencias = result));
  }

  chivato = false;

  seleccionEstado() {
    if (this.chivato == false) {
      this.incidenciasTotal = this.incidencias;
      this.chivato = true;
    }

    this.incidencias = [];

    this.estado = this.estadoSeleccionado;

    for (let i = 0; i < this.incidenciasTotal.length; i++) {
      if (this.estado == this.incidenciasTotal[i].estado) {
        this.incidencias.push(this.incidenciasTotal[i]);
      } else if (this.estado == this.incidenciasTotal[i].estado) {
        this.incidencias.push(this.incidenciasTotal[i]);
      } else if (this.estado == this.incidenciasTotal[i].estado) {
        this.incidencias.push(this.incidenciasTotal[i]);
      } else if (this.estado == 'Todas') {
        this.incidencias.push(this.incidenciasTotal[i]);
      }
    }
  }

  gestionarIncidencias(i: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: { descripcion: this.incidencias[i].descripcion },
    };
    this.router.navigate(
      ['/modIncidenciasAdmin', this.incidencias[i].codInci],
      navigationExtras
    );
  }

  navegarLogin() {
    this.router.navigate(['']);
  }
}
