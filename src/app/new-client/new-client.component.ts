import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  constructor(
    public dataService: DataService,
    public snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<NewClientComponent>,
    ) { }

  ngOnInit() {
  }

  user: any = {};

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  onSubmit() {
    if(this.user.email == undefined){
      this.user.mail = ''
    };
    this.dataService.addClients(this.user)
      .subscribe(res => {
        this.snackBar.open('Cliente creado!', this.user.nombre, {
          duration: 5000,
        });
      });
    }

}
