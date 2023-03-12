import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IncidenciasServiceService } from '../services/incidencias-service.service';

@Component({
  selector: 'app-mod-incidencias-adm',
  templateUrl: './mod-incidencias-adm.component.html',
  styleUrls: ['./mod-incidencias-adm.component.css']
})
export class ModIncidenciasAdmComponent {

  constructor(private router:Router, private route:ActivatedRoute, private incidenciasServicio: IncidenciasServiceService) {
    // this.crearIncidencia();
    this.modIncidenciaAdm.codInc = this.route.snapshot.params['codInci'];
    this.modIncidenciaAdm.descripcion = this.route.snapshot.queryParams['descripcion'];
   }


  modIncidenciaAdm={

    codInc:0, //aqui alomjeor lo tenemos que hacer por routing
    estado:"",
    descripcion:"",
    feedback:""
  };

    //objeto con los atributos que son los campos del formulario
    incidenciaModificarForm={
      estado:"",
      feedback:""
      }



  incidenciaOK:any=[];

  recogerDatos(form:NgForm){

    const codInc=this.modIncidenciaAdm.codInc;
    const estado=form.value.estado;
    const feedback=form.value.feedback;

    this.modIncidenciaAdm.codInc = codInc;
    this.modIncidenciaAdm.estado = estado;
    this.modIncidenciaAdm.feedback = feedback;

    this.modificarIncidencia();
    this.router.navigate(['/gestionarIncidenciasAdmin']);
  }



  modificarIncidencia() {
    this.incidenciasServicio.modificarIncidencia(this.modIncidenciaAdm).subscribe(
      result => this.incidenciaOK = result

    );

    console.log("SDF");
    console.log(this.modIncidenciaAdm)

  }

  navegarGestionarIncidencias(){
    this.router.navigate(['/gestionarIncidenciasAdmin']);
  }

}
