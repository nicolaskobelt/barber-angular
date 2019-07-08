import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { NewUserComponent } from '../new-user/new-user.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})

export class ShowUsersComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  users: any = [];

  ngOnInit() {
    this.allUsers();
  }

  allUsers(): void { 
    this.dataService.getUsers()
      .subscribe(users => {
        let count = 0; 
        users.forEach(doc => {
          let tmp; 
          tmp = doc.data();
          tmp.id = doc.id;
          this.users[count] = tmp;
          count ++;
        })
      console.log(this.users);
      });
  }

  newUserDialog() {
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;

        this.dialog.open(NewUserComponent, dialogConfig);
  }

  openDialog(id) {
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;

        dialogConfig.data = {id}

        this.dialog.open(DialogUserComponent, dialogConfig);
  }

  deleteUser(id) {
    this.dataService.deleteUser(id);
  }
}
