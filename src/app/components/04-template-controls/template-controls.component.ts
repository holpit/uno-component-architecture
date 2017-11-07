import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Team } from '../models/team';
import { Driver } from '../models/driver';
import { numberUsedValidator } from '../directives/number-used.directive';
import { IconOption } from '../../shared/models/icon-option';
import { Formula1Service } from '../services/formula1.service';

@Component({
  selector: 'uno-template-controls',
  templateUrl: './template-controls.component.html'
})
export class TemplateControlsComponent {
  @ViewChild('tmForm') tmForm;
  teams: Team[];
  socialOptions: IconOption[];
  defaultDriver: Driver;
  driver: Driver;
  value;

  constructor(private f1: Formula1Service) { 
    this.driver = <Driver>{};
    f1.getTeams().subscribe(t => this.teams = t);
    f1.getSocial().subscribe(t => this.socialOptions = t);
    f1.getDefaultDriver().subscribe(t => {
      this.defaultDriver = this.driver = t;
    });
  }

  onSubmit(){
    this.value = { modelValue: this.driver, formValue: this.tmForm.value };
  }
}
