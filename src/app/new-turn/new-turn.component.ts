import { Component, OnInit } from '@angular/core';
import { Barbershop } from '../new-user/new-user.component';
import { DataService } from '../data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import * as moment from 'moment';

export interface TurnTypes {
  value: number;
  viewValue: string;
}


export interface Clients {
  nombre: string;
  id: string;
}

@Component({
  selector: 'app-new-turn',
  templateUrl: './new-turn.component.html',
  styleUrls: ['./new-turn.component.css']
})



export class NewTurnComponent implements OnInit {

  newTurn: FormGroup;
  cliente = new FormControl();
  clients: any = [];
  date = new FormControl(new Date());

  constructor(
    private dataService: DataService,
    private snackBar: MatSnackBar,
  ) {
    this.newTurn = new FormGroup({
      date: new FormControl(),
      hour: new FormControl(),
      barber_id: new FormControl(),
      turn_type: new FormControl(),
      barbero_id: new FormControl(),
      cliente_id: new FormControl(),
    })

  }

  barbershops: Barbershop[] = [
    { value: 1, viewValue: 'Centro' },
    { value: 2, viewValue: 'Guemes' }
  ];

  turn_types: TurnTypes[] = [
    { value: 1, viewValue: 'Corte' },
    { value: 2, viewValue: 'Corte + Barba' },
    { value: 3, viewValue: 'Barba' }
  ];

  barbers: any = [];
  cli: object = {};

  ngOnInit() {
    this.dataService.getClients()
      .subscribe(clients => {
        let count = 0;
        clients.forEach(doc => {
          let tmp;
          tmp = doc.data();
          tmp.id = doc.id;
          this.clients[count] = tmp;
          count++;
        })
      });

    this.dataService.getUsers()
      .subscribe(barbers => {
        let count = 0;
        barbers.forEach(doc => {
          let tmp;
          tmp = doc.data();
          tmp.id = doc.id;
          this.barbers[count] = tmp;
          count++;
        })
      });
  }



  onSubmit() {
    this.newTurn.value.date = moment(this.newTurn.value.date).format("L");
    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].id === this.newTurn.value.cliente_id) {
        this.newTurn.value.cliente = this.clients[i].nombre + " " + this.clients[i].apellido;
      }
    }

    for (let i = 0; i < this.barbers.length; i++) {
      if (this.barbers[i].id === this.newTurn.value.barbero_id) {
        this.newTurn.value.barbero = this.barbers[i].nombre + " " + this.barbers[i].apellido;
      }
    }


    this.dataService.addTurn(this.newTurn.value).then(res => {
      console.log(res);
      this.snackBar.open('Turno agendado!', 'Cerrar');
      window.location.reload();
    }).catch( err => {
      console.log(err);
      this.snackBar.open('Opps! Algo salio mal', 'Cerrar');
    })
    
  }
}

