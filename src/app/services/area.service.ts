import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigRoutesBackend } from '../config/config.routes.backend';  

@Injectable({
  providedIn: 'root'
})
export class AreaServiceService {
  urlAreas:string = ConfigRoutesBackend.areas

  /**
   * Constructor del servicio de áreas.
   * @param http - Cliente HTTP para realizar peticiones al backend.
   */
  constructor(private http: HttpClient) { }

  /**
   * Obtiene todas las áreas disponibles desde el backend.
   * @returns Observable con la respuesta de las áreas.
   */
  getAllAreas(): Observable<any> {
    return this.http.get<any>(`${this.urlAreas}all`);
  }
}
