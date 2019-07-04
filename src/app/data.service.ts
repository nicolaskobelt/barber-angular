import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(public afs: AngularFirestore
  ) {}

  bringTurns() {
    return this.afs.collection('turns').valueChanges();
  }

  addTurn(turn: object) {
    let respuesta; 
    this.afs.collection('turns').add(turn).then( res => {
      console.log(res);
      respuesta = res;
    }).catch(err => {
      console.log(err)
      respuesta = err;
    })
    return respuesta;
  }

  bringClients(){
    return this.afs.collection('clientes').valueChanges();
  }

  addClients(client: object){
    let ress;
    this.afs.collection('clientes').add(client).then(res =>{
      ress = res;
    }).catch(err => {
      ress = err;
    })
    return ress;
  }

  addUser(user: object){
    let ress;
    this.afs.collection('users').add(user).then(res =>{
      ress = res;
    }).catch(err => {
      ress = err;
    })
    return ress;
  }

  getUsers(){
    return this.afs.collection('users').valueChanges();
  }

}
