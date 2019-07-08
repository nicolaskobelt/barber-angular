import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { MatSnackBar } from '@angular/material';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";


export interface Role {
  value: number;
  viewValue: string;
}
export interface Barbershop {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})

export class NewUserComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar,
    private dataService: DataService,
    private dialogRef: MatDialogRef<NewUserComponent>,
  ) { }

  hide = true;

  roles: Role[] = [
    {value: 2, viewValue: 'Barbero'},
    {value: 3, viewValue: 'Recepcionista'},
    {value: 4, viewValue: 'Cliente'}
  ];

  barbershops: Barbershop[] = [
    {value: 1, viewValue: 'Centro'},
    {value: 2, viewValue: 'Guemes'}
  ];

  user: any = {};

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this.dataService.addUser(this.user)
      .subscribe(user => {
        this.snackBar.open('Usuario creado!', this.user.nombre, {
          duration: 5000,
        }); 
      });
    }
}
