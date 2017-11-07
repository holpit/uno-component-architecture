import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
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
export class GroupControlsComponent {
  form: FormGroup;
  teams: Team[];
  defaultDriver: Driver;
  socialOptions: IconOption[];
  value;

  constructor(private fb: FormBuilder, private f1: Formula1Service) { 

    this.form = fb.group({
        name: '',
        number: null,
        teamId: '',
        social: []
    })
    f1.getTeams().subscribe(t => this.teams = t);
    f1.getSocial().subscribe(t => this.socialOptions = t);
    f1.getDefaultDriver().subscribe(t => {
      this.form.patchValue(t);
      this.defaultDriver = t;
    });
  }
}
