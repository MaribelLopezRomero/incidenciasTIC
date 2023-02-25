import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  //objeto con los atributos que son los campos del formulario 
  loginForm={
  email:"",
  password:""
  }


  //recoger los campos que vienen del formulario

  login(form:NgForm){
    //validar el formulario
    // console.log(form.valid);

    // if(form.valid){
    //   //llamada a la API o establecer la conexion con bbdd
    // }

    const email=form.value.email;
    const password=form.value.password;

    console.log(form.value)
    console.log(email)

  }

}
