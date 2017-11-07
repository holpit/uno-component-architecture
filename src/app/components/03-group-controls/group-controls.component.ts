import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { badLuckyValidator } from '../directives/bad-lucky.directive';
import { Formula1Service } from '../services/formula1.service';
import { Team } from '../models/team';
import { Driver } from '../models/driver';
import { numberUsedValidator } from '../directives/number-used.directive';
import { IconOption } from '../../shared/models/icon-option';

@Component({
  selector: 'uno-group-controls',
  templateUrl: './group-controls.component.html'
})
export class GroupControlsComponent implements OnInit {
  form: FormGroup;
  controlDriver: FormControl;
  controlNumber: FormControl;
  controlTeam: FormControl;
  controlSocial: FormControl;
  teams: Team[];
  defaultDriver: Driver;
  socialOptions: IconOption[];
  value;

  constructor(private f1: Formula1Service) { 
    this.controlDriver = new FormControl('');
    this.controlNumber = new FormControl(null);
    this.controlTeam = new FormControl('');
    this.controlSocial = new FormControl([]);
    let driver = {
      name: this.controlDriver,
      number: this.controlNumber,
      teamId: this.controlTeam,
      social: this.controlSocial
    };
    this.form = new FormGroup(driver);
    f1.getTeams().subscribe(t => this.teams = t);
    f1.getSocial().subscribe(t => this.socialOptions = t);
    f1.getDefaultDriver().subscribe(t => {
      this.form.patchValue(t);
      this.defaultDriver = t;
    });
  }

  ngOnInit() {
  }

}
