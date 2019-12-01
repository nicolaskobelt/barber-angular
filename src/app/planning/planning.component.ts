import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as moment from 'moment'



@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) 
  { 
    this.fecha = moment().format("L");
    console.log(this.fecha)
  }

  turns: Object;
  users: Object;
  Turno: Object;
  date;
  fecha;
  turnos;

  ngOnInit() {
    this.allTurns();
    this.allUsers();
  }

  buscar(){
    let temp = moment(this.fecha).format("L")
    this.dataService.bringTurnsByDate(temp).subscribe(turns => {
      this.turns = turns;
    });
  }t

  allTurns(): void {
    this.dataService.bringTurnsByDate(this.fecha).subscribe(turns => {
      this.turns = turns;
    });
  }

  allUsers(): void {
   
  }

}
