import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../app.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/userDetails';
  constructor(private http:HttpClient) { }

  registerUser(user:User){
    return this.http.post(this.baseUrl,user);
  }
  getUser(username:string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}?username=${username}`);
  
  }
}
