import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {MyDialogComponent} from './mydialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'materiatest';
  userInput: string;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  myFormGroup: FormGroup;

  // form control
  myReactFormControl = new FormControl('');

  myTemplateformControlValue: string;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.myFormGroup = new FormGroup({
      username: new FormControl(''),
      email: new FormControl('')
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {title: 'my material style'};
    const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.userInput = result;
    });
  }

  groupButtonClicked() {
    console.log(this.myFormGroup.controls.username.value);
    console.log(this.myFormGroup.controls.email.value);
  }

  onFormSubmit() {
    console.log('group form submit value:', this.myFormGroup.value);
    console.log('group form submit username:', this.myFormGroup.controls.username.value);
    console.log('group form submit email:', this.myFormGroup.controls.email.value);
  }
}
