import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { badLuckyValidator } from '../directives/bad-lucky.directive';
import { Formula1Service } from '../services/formula1.service';
import { Team } from '../models/team';
import { Driver } from '../models/driver';

@Component({
  selector: 'uno-group-controls',
  templateUrl: './group-controls.component.html'
})
export class GroupControlsComponent implements OnInit {
  form: FormGroup;
  controlDriver: FormControl;
  controlNumber: FormControl;
  controlTeam: FormControl;
  teams: Team[];
  defaultDriver: Driver;
  value;

  constructor(private f1: Formula1Service) { 
    this.controlDriver = new FormControl('');
    this.controlNumber = new FormControl(null, badLuckyValidator());
    this.controlTeam = new FormControl('');
    let driver = {
      name: this.controlDriver,
      number: this.controlNumber,
      teamId: this.controlTeam
    };
    this.form = new FormGroup(driver);
    f1.getTeams().subscribe(t => this.teams = t);
    f1.getDefaultDriver().subscribe(t => {
      this.form.patchValue(t);
      this.defaultDriver = t;
    });
  }

  ngOnInit() {
  }

}
