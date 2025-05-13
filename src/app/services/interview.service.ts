import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigRoutesBackend } from '../config/config.routes.backend';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  urlInterviews:string = ConfigRoutesBackend.interwiews

  constructor(private http: HttpClient) {}

  createInterview(interviewData: any): Observable<any> {
    return this.http.post<any>(`${this.urlInterviews}create`, interviewData);
  }

}
