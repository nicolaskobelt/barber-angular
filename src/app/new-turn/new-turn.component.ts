import { Component, OnInit } from '@angular/core';
import { Barbershop } from '../new-user/new-user.component';
import { DataService } from '../data.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FechaHoraComponent } from '../date-timePicker/fecha-hora.component';

export interface TurnTypes {
  value: number;
  viewValue: string;
}

export interface Barber {
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
  constructor(
    private dataService: DataService,
  ) { }

  barbershops: Barbershop[] = [
    {value: 1, viewValue: 'Centro'},
    {value: 2, viewValue: 'Guemes'}
  ];

  turn_types: TurnTypes[] = [
    {value: 1, viewValue: 'Corte'},
    {value: 2, viewValue: 'Corte + Barba'},
    {value: 3, viewValue: 'Barba'}
  ];

  barbers: Barber[] = [
    {value: 2, viewValue: 'Juan'},
    {value: 3, viewValue: 'Esteban'},
    {value: 4, viewValue: 'Richard'}
  ];

  turn: any = {};
  clients: any = {};
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
          count ++;
        })
      });
  }


  onSubmit() {
    console.log(this.turn);
    this.dataService.addTurn(this.turn)
      .subscribe(turn => {
      });
  }
}
