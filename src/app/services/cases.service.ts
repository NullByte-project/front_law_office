import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { ConfigRoutesBackend } from '../config/config.routes.backend';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  urlCases: string = ConfigRoutesBackend.cases;

  /**
   * Constructor del servicio de casos.
   * @param http - Cliente HTTP para realizar peticiones al backend.
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los casos asociados a un área específica desde el backend.
   * @param areaId - ID del área para la cual se buscan los casos.
   * @returns Observable con la respuesta de los casos.
   */
  getCasesForArea(areaId: number): Observable<any> {
    return this.http.get<any>(`${this.urlCases}get-by-area/${areaId}`);
  }

  /**
   * Obtiene la información detallada de un caso específico por su ID.
   * @param caseId - ID del caso a consultar.
   * @returns Observable con la información del caso.
   */
  getCaseById(caseId: number): Observable<any> {
    return this.http.get<any>(`${this.urlCases}get-by-id/${caseId}`);
  }
}
