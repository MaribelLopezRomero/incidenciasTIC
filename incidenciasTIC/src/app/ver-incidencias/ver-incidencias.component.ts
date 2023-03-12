//
//
// INCIDENCIAS DE CADA USUARIO



import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IncidenciasServiceService } from '../services/incidencias-service.service';


@Component({
  selector: 'app-ver-incidencias',
  templateUrl: './ver-incidencias.component.html',
  styleUrls: ['./ver-incidencias.component.css']
})
export class VerIncidenciasComponent {

  constructor(private router:Router, private route:ActivatedRoute, private incidenciasService: IncidenciasServiceService) {
    this.codUsu.codUsu = this.route.snapshot.params['codUsu'];
    this.obtenerIncidenciasUsu();

    console.log(this.codUsu.codUsu);
   }

  codUsu:any={
    codUsu:""
  };


  //esta variable la tenemos que recuperar del opbjeto usuario al logearnos
  incidencias:any=[];


  obtenerIncidenciasUsu() {
    this.incidenciasService.obtenerIncidenciasUsus(this.codUsu).subscribe(
      result => this.incidencias = result
    );
    console.log(this.codUsu);

  }


  navegarCrearIncidencias(){
    this.router.navigate(['./incidenciasUsuarioCrear', this.codUsu.codUsu]);
  }


  navegarLogin(){
    this.router.navigate(['']);
  }


}
