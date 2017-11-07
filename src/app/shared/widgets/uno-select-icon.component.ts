import { Component, Host, Input, OnInit, ViewContainerRef, Optional } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { UnoFormComponent } from './uno-form.components';
import { IconOption } from '../models/icon-option';

@Component({
  selector: 'uno-select-icon',
  template: `
    <label>{{label}}</label>
    <uno-icons-selector [options]="options"></uno-icons-selector>
  `
})
export class UnoSelectIconComponent implements OnInit {
@Input() name: string;
@Input() label: string;
@Input() options: IconOption[];
control: FormControl;

  constructor(@Optional() public parent: UnoFormComponent) {}

  ngOnInit() {
    this.parent.form.addControl(this.name, new FormControl(null));
    this.control = <FormControl>this.parent.form.get(this.name);
  }

}
