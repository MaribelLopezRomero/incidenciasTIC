import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasServiceService {


  URL = "http://localhost/PHP/";

  constructor(private http: HttpClient) { }

  obtenerIncidencias() {
    return this.http.get(`${this.URL}listarIncidencias.php `);
  }




}
