
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuariosServiceService } from '../services/usuarios-service.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private usuariosServicio: UsuariosServiceService) {
    this.obtenerUsuarios();
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


  //recoger los campos que vienen del formulario

  login(form:NgForm){
    //validar el formulario
    // console.log(form.valid);

    // if(form.valid){
    //   //llamada a la API o establecer la conexion con bbdd
    // }

    const email=form.value.email;
    const password=form.value.password;

    this.usuario.email = email;
    this.usuario.password=password;

    console.log(this.usuario);

  }



  obtenerUsuarios() {
    this.usuariosServicio.obtenerUsuarios(this.usuario).subscribe(
      result => this.usuarios = result
    );
  }

}
