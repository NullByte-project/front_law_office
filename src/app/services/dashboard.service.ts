import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigRoutesBackend } from '../config/config.ruotes.backend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = ConfigRoutesBackend.cases;

  constructor(private http: HttpClient) {}

  getCaseById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}get-by-id/${id}`);
  }
}
