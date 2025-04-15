import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigRoutesBackend } from '../config/config.ruotes.backend';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  apiUrl:string = ConfigRoutesBackend.clients


  constructor(private http: HttpClient) {}

  createClient(clienData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}create`, clienData);
  }
}
