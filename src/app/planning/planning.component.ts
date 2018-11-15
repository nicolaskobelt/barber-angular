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

  ngOnInit() {
    this.allTurns();
    this.allUsers();
  }

  allTurns(): void {
    this.dataService.getTurns()
      .subscribe(turns => {
        this.turns = turns;
      });
  }

  allUsers(): void {
    this.dataService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

}
