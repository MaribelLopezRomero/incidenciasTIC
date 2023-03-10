import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IncidenciasServiceService } from '../services/incidencias-service.service';

@Component({
  selector: 'app-mod-incidencias-adm',
  templateUrl: './mod-incidencias-adm.component.html',
  styleUrls: ['./mod-incidencias-adm.component.css']
})
export class ModIncidenciasAdmComponent {

  constructor(private incidenciasServicio: IncidenciasServiceService) {
    // this.crearIncidencia();
   }


  modIncidenciaAdm={

    codInc:0, //aqui alomjeor lo tenemos que hacer por routing
    estado:"",
    feedback:""
  };

    //objeto con los atributos que son los campos del formulario
    incidenciaModificarForm={
      estado:"",
      feedback:""
      }



  incidenciaOK:any=[];

  recogerDatos(form:NgForm){

    const codInc=1;
    const estado=form.value.estado;
    const feedback=form.value.feedback;

    this.modIncidenciaAdm.codInc = codInc;
    this.modIncidenciaAdm.estado = estado;
    this.modIncidenciaAdm.feedback = feedback;

    console.log("we",this.modIncidenciaAdm);

  }



  modificarIncidencia() {
    this.incidenciasServicio.modificarIncidencia(this.modIncidenciaAdm).subscribe(
      result => this.incidenciaOK = result

    );

    console.log("SDF");
    console.log(this.modIncidenciaAdm)

  }

}
