import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogClientComponent } from '../dialog-client/dialog-client.component';
import { NewClientComponent } from '../new-client/new-client.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private dialog: MatDialog
  ) {}

  clients: any = [];

  ngOnInit() {
    this.allClients();
  }

  allClients(): void { 
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

  openNewCli(){
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;

        this.dialog.open(NewClientComponent, dialogConfig);
  }


  openDialog(id) {
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;

        dialogConfig.data = {id}

        this.dialog.open(DialogClientComponent, dialogConfig);
  }
}
