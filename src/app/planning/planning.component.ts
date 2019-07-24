import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  turns: Object;
  users: Object;
  Turno: Object;
  date;
  fecha = '2019-07-20'
  turnos;

  ngOnInit() {
    this.date = new Date().toLocaleDateString()
    // const today = new Date();
    // const dd = String(today.getDate()).padStart(2, '0');
    // const mm = String(today.getMonth() + 1).padStart(2, '0');
    // var yyyy = today.getFullYear();
    // this.date = dd + '/' + mm + '/' + yyyy ;
    this.allTurns();
    this.allUsers();

  }

  allTurns(): void {
    let counter = 0;
    this.dataService.bringTurns().subscribe(turns => {
      this.turns = turns;
    });
  }

  allUsers(): void {
   
  }

}
