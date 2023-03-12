
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosServiceService } from '../services/usuarios-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router, private usuariosServicio: UsuariosServiceService) {
    // this.obtenerUsuarios();
   }

   //Objeto usuario para pasarlo como parametros a la base de datps

   usuario={
    email:null,
    password:null
   };


  //objeto con los atributos que son los campos del formulario
  loginForm={
  email:"",
  password:""
  }

  //Variable para guadar lo que me traigo de la bbdd

  usuarios:any=[];
  // usuarios[0].codUsu=0;
  //recoger los campos que vienen del formulario

  login(form:NgForm){

    const email=form.value.email;
    const password=form.value.password;

    this.usuario.email = email;
    this.usuario.password=password;

    console.log(this.usuario);
    this.obtenerUsuarios();
    this.navegarVerIncidencias();
  }


  obtenerUsuarios() {
    this.usuariosServicio.obtenerUsuarios(this.usuario).subscribe(
      result => this.usuarios = result

    );
    console.log(this.usuarios.codUsu);
  }


  navegarVerIncidencias(){
    if(this.usuarios[0].codUsu == 9){
      this.router.navigate(['/gestionarIncidenciasAdmin']);
    }else{
      this.router.navigate(['/incidenciasUsuarioListar', this.usuarios[0].codUsu]);
  }

  }
}
