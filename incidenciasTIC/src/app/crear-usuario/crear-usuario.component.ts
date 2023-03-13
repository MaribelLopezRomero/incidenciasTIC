import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosServiceService } from '../services/usuarios-service.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

  constructor(private router:Router, private usuariosServicio: UsuariosServiceService) {
    // this.obtenerUsuarios();
   }

   //Objeto usuario para pasarlo como parametros a la base de datps

   usuario={
    nombre:null,
    apellido:null,
    departamento:null,
    email:null,
    password:null
   };


  //objeto con los atributos que son los campos del formulario
  loginForm={
    nombre:"",
    apellido:"",
    departamento:"",
  email:"",
  password:""
  }

  //Variable para guadar lo que me traigo de la bbdd

  usuarios:any=[];
  // usuarios[0].codUsu=0;
  //recoger los campos que vienen del formulario

  insercionOK:any=[];

  registrarse(form:NgForm){

    const email=form.value.email;
    const password=form.value.password;
    const nombre=form.value.nombre;
    const apellido=form.value.apellido;
    const departamento=form.value.departamento;




    this.usuario.email = email;
    this.usuario.password=password;
    this.usuario.nombre = nombre;
    this.usuario.apellido=apellido;
    this.usuario.departamento=departamento;

    console.log(this.usuario);
    this.registrarUsuario();
    this.navegarLogin();
  }



  registrarUsuario() {
    this.usuariosServicio
      .registrarUsuario(this.usuario)
      .subscribe((result) => (this.insercionOK = result));
  }



  navegarLogin(){

      this.router.navigate(['/login']);
  }

}
