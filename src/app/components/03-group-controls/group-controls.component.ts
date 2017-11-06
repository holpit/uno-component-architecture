import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { badLuckyValidator } from '../directives/bad-lucky.directive';

@Component({
  selector: 'uno-group-controls',
  templateUrl: './group-controls.component.html'
})
export class GroupControlsComponent implements OnInit {
  form: FormGroup;
  controlDriver: FormControl;
  controlNumber: FormControl;
  controlTeam: FormControl;
  value;

  constructor() { 
    this.controlDriver = new FormControl('Vettel');
    this.controlNumber = new FormControl(5, badLuckyValidator());
    this.controlTeam = new FormControl('MCL');
    let driver = {
      driver: this.controlDriver,
      number: this.controlNumber,
      team: this.controlTeam
    };
    this.form = new FormGroup(driver);
  }

  ngOnInit() {
  }

}
