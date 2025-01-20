import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint

  constructor(private http: HttpClient) {}

  // Method to fetch users as an Observable
  getUsers(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
