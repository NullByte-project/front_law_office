import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigRoutesBackend } from '../config/config.ruotes.backend';

@Injectable({
  providedIn: 'root'
})
export class ProceduresService {
  urlProcedures:string = ConfigRoutesBackend.procedures

  constructor(private http: HttpClient) {}

  getProceduresByArea(areaId: number): Observable<any> {
    return this.http.get<any>(`${this.urlProcedures}get-by-area/${areaId}`);
  }
}
