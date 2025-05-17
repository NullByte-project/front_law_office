import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigRoutesBackend } from '../config/config.routes.backend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = ConfigRoutesBackend.cases;
  private approvalCodeUrl = ConfigRoutesBackend.approvalCode;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene la información detallada de un caso por su ID.
   * @param id - ID del caso a consultar.
   * @returns Observable con la información del caso.
   */
  getCaseById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}get-by-id/${id}`);
  }

  /**
   * Genera un nuevo código de aprobación.
   * @returns Observable con el código generado.
   */
  generateApprovalCode(): Observable<any> {
    return this.http.post(this.approvalCodeUrl, {});
  }

  /**
   * Agrega una acción legal a un caso específico.
   * @param caseId - ID del caso al que se agregará la acción legal.
   * @param actionData - Datos de la acción legal a agregar.
   * @returns Observable con la respuesta del backend.
   */
  addLegalAction(caseId: number, actionData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}add-legal-action?caseId=${caseId}`, actionData);
  }

  /**
   * Obtiene los procedimientos asociados a un área específica.
   * @param areaId - ID del área.
   * @returns Observable con la lista de procedimientos.
   */
  getProceduresByArea(areaId: number): Observable<any[]> {
    return this.http.get<any[]>(`${ConfigRoutesBackend.procedures}get-by-area/${areaId}`);
  }

  /**
   * Obtiene las etapas asociadas a una acción legal específica.
   * @param legalActionId - ID de la acción legal.
   * @returns Observable con la lista de etapas.
   */
  getStagesByLegalAction(legalActionId: number): Observable<any[]> {
    return this.http.get<any[]>(`${ConfigRoutesBackend.legalActions}get-by-legal-action/${legalActionId}`);
  }

  /**
   * Obtiene todas las etapas disponibles.
   * @returns Observable con la lista de todas las etapas.
   */
  getAllStages(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8081/api/stages/all');
  }

  /**
   * Crea una nueva etapa para una acción legal.
   * @param data - Datos de la etapa a crear.
   * @returns Observable con la respuesta del backend.
   */
  createStageForLegalAction(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:8081/api/stages-legal-action/create', data);
  }


}
