import { Component, Host, Input, OnInit, ViewContainerRef, Optional } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { UnoFormComponent } from './uno-form.components';
import { Option } from '../models/option';

@Component({
  selector: 'uno-select',
  template: `
    <label for="{{name}}">{{label}}</label>
    <select id="{{name}}" [formControl]="control">
        <option *ngFor="let option of options" value="{{option.value}}">{{option.text}}</option>
    </select>
  `
})
export class UnoSelectComponent implements OnInit {
@Input() name: string;
@Input() label: string;
@Input() options: Option[];
control: FormControl;

  constructor(@Optional() public parent: UnoFormComponent) {}

  ngOnInit() {
    this.parent.form.addControl(this.name, new FormControl(null));
    this.control = <FormControl>this.parent.form.get(this.name);
  }

}
