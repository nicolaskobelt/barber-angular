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
    this.dataService.bringTurns()
    .subscribe(turns => {
      this.turns = turns;
      console.log(this.turns);
    });

    console.log(this.date);
  }

  allUsers(): void {
   
  }

}
