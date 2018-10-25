import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})

export class NewUserComponent implements OnInit {

  constructor() { }
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  foods: Food[] = [
    {value: 'ADMIN', viewValue: 'Adiministrador'},
    {value: 'BAR', viewValue: 'Barbero'},
    {value: 'REC', viewValue: 'Recepcionista'},
    {value: 'CLI', viewValue: 'Cliente'}
  ];

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  ngOnInit() {
  }

}
