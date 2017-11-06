import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    this.controlNumber = new FormControl(5);
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
