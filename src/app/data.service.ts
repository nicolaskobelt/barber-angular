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
    return this.afs.collection('turns', res => res.orderBy('hora')).valueChanges();
  }


  bringTurnsByDate(fecha: string){
    return this.afs.collection('turns', res => res.where('fecha', '==', fecha)).valueChanges();
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

  getClients(){
    return this.afs.collection('clientes').get();
  }

  getClientById(id: string){
    return this.afs.collection('clientes').doc(id).valueChanges();
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

  updateClient(id: string, datos: object){
    console.log('log data service', id, datos);
    this.afs.collection('clientes').doc(id).update(datos);
  }

  addUser(user: object){
    console.log(user)
    let ress;
    this.afs.collection('users').add(user).then(res =>{
      console.log(res);
      ress = res;
    }).catch(err => {
      console.log(err)
      ress = err;
    })
    return ress;
  }

  deleteUser(id: string){
    console.log(id);
    this.afs.collection('users').doc(id).delete();
  }

  getUsers(){
    return this.afs.collection('users').get();
  }

  getUserById(id: string){
    return this.afs.collection('users').doc(id).valueChanges();
  }

}
