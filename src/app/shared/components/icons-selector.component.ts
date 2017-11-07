import { Component, forwardRef, HostListener, Input } from '@angular/core';
import { IconOption } from '../models/icon-option';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'uno-icons-selector',
  template: `
    <div>
      <i *ngFor="let option of options" 
         class="fa fa-2x {{option.iconName}}"
         [class.disabled]="isDisabled"
         [class.selected]="values ? values.includes(option.id) : false" 
         (click)="selectIcon(option.id)"
         aria-hidden="true"></i>
    </div>
  `,
  styles: [
    'i {margin-left: 5px; cursor: pointer;}',
    '.disabled {opacity: .5;}',
    '.selected {color: #9b4dca;}'
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IconsSelectorComponent),
      multi: true
    }
  ]
})
export class IconsSelectorComponent implements ControlValueAccessor {
  @Input() options: IconOption[];
  onChange = (values: string[]) => { };
  onTouched = () => { };
  isDisabled: any;
  values: string[] = [];

  constructor() { }

  selectIcon(id: string) {
    // Se disabilitato non consento nessuna azione
    if(this.isDisabled){
      return;
    }
    // Se l'elemento non è già presente lo inserirsco nell'elenco, altrimenti lo elimino
    var index = this.values ? this.values.indexOf(id) : -1;
    if (index === -1) {
      this.values.push(id);
    } else {
      this.values.splice(index, 1);
    }
    // Notifico la modifica a Reactive Form
    if (this.onChange) {
      this.onChange(this.values);
    }
    // Notifico lo stato di touched 
    if (this.onTouched) {
      this.onTouched();
    }
  }

  writeValue(obj: any): void {
    this.values = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
