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
}
