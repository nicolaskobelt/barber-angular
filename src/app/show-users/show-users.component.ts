import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})

export class ShowUsersComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) {}

  users: Object;

  ngOnInit() {
    this.allUsers();
  }

  allUsers(): void {
    this.dataService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }
}
