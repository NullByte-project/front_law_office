import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface CreateUserDTO {
  username: string;
  password: string;
  email: string;
  phone: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  private apiUrl = 'http://localhost:8081/api/users/create';

  constructor(private http: HttpClient) {}

  registerUser(user: CreateUserDTO): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  getAllUsers(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:8081/api/users/all');
}

}
