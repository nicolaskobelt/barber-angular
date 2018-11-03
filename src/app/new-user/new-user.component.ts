import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DataService } from '../data.service';


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
    {value: 1, viewValue: 'Centro'}
  ];

  user: any = {};

  ngOnInit() {
    this.onSubmit();
  }

  onSubmit() {
      console.log(this.user);
      this.dataService.addUser(this.user)
        .subscribe(user =>
          this.user.push(this.user));
    }
}
