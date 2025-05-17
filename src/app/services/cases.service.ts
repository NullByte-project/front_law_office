import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { ConfigRoutesBackend } from '../config/config.routes.backend';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  urlCases: string = ConfigRoutesBackend.cases;

  constructor(private http: HttpClient) {}

  getCasesForArea(areaId: number): Observable<any> {
    return this.http.get<any>(`${this.urlCases}get-by-area/${areaId}`);
  }

  getCaseById(caseId: number): Observable<any> {
    return this.http.get<any>(`${this.urlCases}get-by-id/${caseId}`);
  }
}
