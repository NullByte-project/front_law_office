import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigRoutesBackend } from '../config/config.routes.backend';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  urlInterviews:string = ConfigRoutesBackend.interwiews

  /**
   * Constructor del servicio de entrevistas.
   * @param http - Cliente HTTP para realizar peticiones al backend.
   */
  constructor(private http: HttpClient) {}

  /**
   * Crea una nueva entrevista en el backend.
   * @param interviewData - Datos de la entrevista a registrar.
   * @returns Observable con la respuesta del backend.
   */
  createInterview(interviewData: any): Observable<any> {
    return this.http.post<any>(`${this.urlInterviews}create`, interviewData);
  }

}
