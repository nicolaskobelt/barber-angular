import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DataService } from '../data.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css']
})
export class DialogUserComponent implements OnInit {

  userId;
  user;
  constructor(
    private dataService: DataService,
    private dialogRef: MatDialogRef<DialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) data) 
  { 
  this.userId = data.id;
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit() {
    console.log(this.userId)
    this.dataService.getUserById(this.userId).subscribe(res => {
        this.user = res;
        console.log(this.user);
      }
    )
  }

}
