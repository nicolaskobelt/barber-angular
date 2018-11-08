import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DataService } from '../data.service';
// import { MatSnackBar } from '@angular/material';


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
    //public snackBar: MatSnackBar,
    private dataService: DataService,
  ) { }

  hide = true;

  roles: Role[] = [
    {value: 1, viewValue: 'Adiministrador'},
    {value: 2, viewValue: 'Barbero'},
    {value: 3, viewValue: 'Recepcionista'},
    {value: 4, viewValue: 'Cliente'}
  ];

  barbershops: Barbershop[] = [
    {value: 1, viewValue: 'Centro'},
    {value: 2, viewValue: 'Guemes'}
  ];

  user: any = {};

  ngOnInit() {
    this.onSubmit();
  }

  contrasena() {
    return true;
  }

  onSubmit() {
      console.log(this.user);
      this.dataService.addUser(this.user)
        .subscribe(user =>
          this.user.push(this.user));

    //   this.snackBar.open('Usuario Creado!', this.user.fist_name, {
    //     duration: 2000,
    // });
    }
}
