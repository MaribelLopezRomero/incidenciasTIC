import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IncidenciasServiceService } from '../services/incidencias-service.service';

@Component({
  selector: 'app-crear-incidencia',
  templateUrl: './crear-incidencia.component.html',
  styleUrls: ['./crear-incidencia.component.css']
})
export class CrearIncidenciaComponent {

  constructor(private router:Router, private route:ActivatedRoute, private incidenciasServicio: IncidenciasServiceService) {

    // this.crearIncidencia();
      this.altaIncidenciaUsu.codUsuInc = this.route.snapshot.params['codUsu'];
   }


  altaIncidenciaUsu={

    codUsuInc:0, //aqui alomjeor lo tenemos que hacer por routing
    fecha:"",
    tipo:"",
    aula:"",
    grupo:"",
    descripcion:"",
    estado:"",
    feedback:""
  };

    //objeto con los atributos que son los campos del formulario
    incidenciaForm={
      fecha:"",
      tipo:"",
      aula:"",
      grupo:"",
      descripcion:"",
      estado:"",
      feedback:""
      }



  incidenciaOK:any=[];

  recogerDatos(form:NgForm){

    const codUsuInc=3;
    const tipo=form.value.tipo;
    const aula=form.value.aula;
    const descripcion=form.value.descripcion;
    const fecha=form.value.fecha;
    const grupo=form.value.grupo;
    const estado="Creada";
    const feedback=" ";

    this.altaIncidenciaUsu.codUsuInc = codUsuInc;
    this.altaIncidenciaUsu.tipo = tipo;
    this.altaIncidenciaUsu.aula = aula;
    this.altaIncidenciaUsu.descripcion = descripcion;
    this.altaIncidenciaUsu.fecha = fecha;
    this.altaIncidenciaUsu.grupo = grupo;
    this.altaIncidenciaUsu.estado = estado;
    this.altaIncidenciaUsu.feedback = feedback;

    this.crearIncidencia();

    this.router.navigate(['/incidenciasUsuarioListar', this.altaIncidenciaUsu.codUsuInc]);
  }



  crearIncidencia() {
    this.incidenciasServicio.crearIncidencia(this.altaIncidenciaUsu).subscribe(
      result => this.incidenciaOK = result
    );

  }

  navegarVerIncidencias(){
    this.router.navigate(['/incidenciasUsuarioListar', this.altaIncidenciaUsu.codUsuInc]);
  }
}
