import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasServiceService {


  URL = "http://localhost/IncidenciasTic/PHP/";


  constructor(private http: HttpClient) { }

  // metodo para sacar todas las incidencias  - ADMINISTRADOR
  obtenerIncidencias() {
    return this.http.get(`${this.URL}listarIncidenciasAdministrador.php`);
  }

  // metodo para sacar todas las incidencias del usuario - USUARIO
  obtenerIncidenciasUsus(codUsu: string) {
    console.log(codUsu);
    return this.http.post(`${this.URL}listarIncidenciasUsuario.php `, JSON.stringify(codUsu));
  }
    // metodo para crear incidencias -  USUARIO
    crearIncidencia(altaIncidenciaUsu: { codUsuInc: number; fecha: string; tipo: string; aula: string; grupo: string; descripcion: string; estado: string; feedback: string; }) {
      console.log(altaIncidenciaUsu);
      return this.http.post(`${this.URL}crearIncidenciaUsuario.php `, JSON.stringify(altaIncidenciaUsu));

    }

    //Metodo para modificar incidencia - ADMINISTRADO

    modificarIncidencia(modIncidenciaAdm: { codInc: number; estado: string; feedback: string; }){
      return this.http.post(`${this.URL}modificarIncidencia.php `, JSON.stringify(modIncidenciaAdm));

    }




}
