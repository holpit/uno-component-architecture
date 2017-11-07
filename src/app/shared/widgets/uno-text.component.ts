import { Component, Host, Input, OnInit, Optional } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { UnoFormComponent } from './uno-form.components';

@Component({
  selector: 'uno-text',
  template: `
    <label for="{{name}}">{{label}}</label>
    <input type="{{type}}" id="{{name}}" placeholder="{{placeholder}}" [formControl]="control">
  `
})
export class UnoTextComponent implements OnInit {
@Input() name: string;
@Input() label: string;
@Input() type = "text";
@Input() placeholder: string;
@Input()
set required(value) {
    this._required = true;
}
get required() { return this._required; }
private _required = false;
control: FormControl;

  constructor(@Optional() public parent: UnoFormComponent) {}

  ngOnInit() {
    let control =  new FormControl(null, this.required ? Validators.required : null);
    this.parent.form.addControl(this.name, control);
    this.control = <FormControl>this.parent.form.get(this.name);
  }

}
