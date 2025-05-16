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

  getCaseById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}get-by-id/${id}`);
  }

  generateApprovalCode(): Observable<any> {
    return this.http.post(this.approvalCodeUrl, {});
  }

  addLegalAction(caseId: number, actionData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}add-legal-action?caseId=${caseId}`, actionData);
  }

getProceduresByArea(areaId: number): Observable<any[]> {
  return this.http.get<any[]>(`${ConfigRoutesBackend.procedures}get-by-area/${areaId}`);
}

getStagesByLegalAction(legalActionId: number): Observable<any[]> {
  return this.http.get<any[]>(`${ConfigRoutesBackend.legalActions}get-by-legal-action/${legalActionId}`);
}

getAllStages(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:8081/api/stages/all');
}

createStageForLegalAction(data: any): Observable<any> {
  return this.http.post<any>('http://localhost:8081/api/stages-legal-action/create', data);
}


}
