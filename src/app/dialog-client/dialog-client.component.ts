import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DataService } from '../data.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-client',
  templateUrl: './dialog-client.component.html',
  styleUrls: ['./dialog-client.component.css']
})
export class DialogClientComponent implements OnInit {

  clientId;
  client;
  constructor(
    private dataService: DataService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<DialogClientComponent>,
    @Inject(MAT_DIALOG_DATA) data) 
  { 
  this.clientId = data.id;
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit() {
    console.log(this.clientId)
    this.dataService.getClientById(this.clientId).subscribe(res => {
        this.client = res;
        console.log(this.client);
      }
    )
  }

  modificar(){
    this.dataService.updateClient(this.clientId, this.client);
    this.snackBar.open(this.client.nombre, 'fue modificado exitosamente', {
      duration: 3000,
    });
  }

}
