import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigRoutesBackend } from '../config/config.routes.backend';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  urlClients:string = ConfigRoutesBackend.clients


  constructor(private http: HttpClient) {}

  createClient(clientData: any): Observable<any> {
    return this.http.post<any>(`${this.urlClients}create`, clientData);
  }


  updateSocioeconomicStudy(socioData: any, idclient: String) {
    return this.http.put(`${this.urlClients}socioeconomicStudy/${idclient}`, socioData);
  }

  getClientById(idclient: String): Observable<any> {
    return this.http.get<any>(`${this.urlClients}${idclient}`);
  }
}
