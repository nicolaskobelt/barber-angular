import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface Role {
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

  roles: Role[] = [
    {value: 'ADM', viewValue: 'Adiministrador'},
    {value: 'BAR', viewValue: 'Barbero'},
    {value: 'REC', viewValue: 'Recepcionista'},
    {value: 'CLI', viewValue: 'Cliente'}
  ];

  getErrorMessage() {
    return this.email.hasError('requerido') ? 'Tenes que entrar un email valido' :
      this.email.hasError('email') ? 'Email no valido' :
        '';
  }

  ngOnInit() {
  }

}
