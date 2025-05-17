import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigRoutesBackend } from '../config/config.routes.backend';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  urlClients:string = ConfigRoutesBackend.clients


  /**
   * Constructor del servicio de clientes.
   * @param http - Cliente HTTP para realizar peticiones al backend.
   */
  constructor(private http: HttpClient) {}

  /**
   * Crea un nuevo cliente en el backend.
   * @param clientData - Datos del cliente a registrar.
   * @returns Observable con la respuesta del backend.
   */
  createClient(clientData: any): Observable<any> {
    return this.http.post<any>(`${this.urlClients}create`, clientData);
  }

  /**
   * Actualiza el estudio socioeconómico de un cliente.
   * @param socioData - Datos del estudio socioeconómico.
   * @param idclient - ID del cliente a actualizar.
   * @returns Observable con la respuesta del backend.
   */
  updateSocioeconomicStudy(socioData: any, idclient: String) {
    return this.http.put(`${this.urlClients}socioeconomicStudy/${idclient}`, socioData);
  }

  /**
   * Obtiene la información de un cliente por su ID.
   * @param idclient - ID del cliente a consultar.
   * @returns Observable con la información del cliente.
   */
  getClientById(idclient: String): Observable<any> {
    return this.http.get<any>(`${this.urlClients}${idclient}`);
  }
}
