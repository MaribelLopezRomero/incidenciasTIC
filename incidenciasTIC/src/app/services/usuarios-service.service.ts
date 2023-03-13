import { Usuario } from './../models/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {


  URL = "http://localhost/IncidenciasTic/PHP/";

  constructor(private http: HttpClient) { }

  obtenerUsuarios(usuario: {
      email: null; password: null; //   return this.http.get(`${this.URL}BajaUsuario.php?idUsuario=${idUsuario}`);
    }) {
    return this.http.post(`${this.URL}obtenerUsuarios.php `, JSON.stringify(usuario) );
  }

  registrarUsuario(usuario: { nombre: null; apellido: null; departamento: null; email: null; password: null; }){

    console.log("llegaa",usuario);
    return this.http.post(`${this.URL}registrarUsuario.php `, JSON.stringify(usuario) );

  }


}
