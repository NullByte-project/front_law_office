import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigRoutesBackend } from '../config/config.routes.backend';

@Injectable({
  providedIn: 'root'
})
export class ProceduresService {
  urlProcedures:string = ConfigRoutesBackend.procedures

  /**
   * Constructor del servicio de procedimientos.
   * @param http - Cliente HTTP para realizar peticiones al backend.
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtiene los procedimientos asociados a un área específica desde el backend.
   * @param areaId - ID del área para la cual se buscan los procedimientos.
   * @returns Observable con la lista de procedimientos.
   */
  getProceduresByArea(areaId: number): Observable<any> {
    return this.http.get<any>(`${this.urlProcedures}get-by-area/${areaId}`);
  }
}
