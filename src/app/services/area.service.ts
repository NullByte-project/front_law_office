import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigRoutesBackend } from '../config/config.ruotes.backend';  

@Injectable({
  providedIn: 'root'
})
export class AreaServiceService {
  urlAreas:string = ConfigRoutesBackend.areas

  constructor(private http: HttpClient) { }

  getAllAreas(): Observable<any> {
    return this.http.get<any>(`${this.urlAreas}all`);
  }
}
