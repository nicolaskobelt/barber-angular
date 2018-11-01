import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private barberUsersUrl = 'http://localhost:3000/api/users';

  constructor(
    private http: HttpClient
  ) {}

  getUsers () {
    return this.http.get(this.barberUsersUrl);
  }

  // addUser() {
  //   return this.http.post<User>(this.barberUsersUrl, User, httpOptions);
  // }


}
