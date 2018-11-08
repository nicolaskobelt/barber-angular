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

  private userURL = 'http://localhost:3000/api/users';
  private turnURL = 'http://localhost:3000/api/turns';

  constructor(
    private http: HttpClient
  ) {}

  getUsers () {
    return this.http.get(this.userURL);
  }

  addUser (user) {
    return this.http.post(this.userURL, user, httpOptions);
  }

  addTurn(turn) {
    return this.http.post(this.turnURL, turn, httpOptions);
  }
}
