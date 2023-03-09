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
    return this.http.get(`${this.URL}listarIncidenciasAdministrador.php `);
  }

  // metodo para sacar todas las incidencias del usuario - USUARIO
  obtenerIncidenciasUsus(codUsu: number) {
    return this.http.post(`${this.URL}listarIncidenciasUsuario.php `, codUsu);
  }




}
