import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})

export class ShowUsersComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private dialog: MatDialog
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

  openDialog(id) {
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;

        dialogConfig.data = {id}

        this.dialog.open(DialogUserComponent, dialogConfig);
  }
}
