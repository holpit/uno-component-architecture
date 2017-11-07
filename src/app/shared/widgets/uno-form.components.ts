import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'uno-form',
    template: `
    <form [formGroup]="form">
        <fieldset>
            <legend>{{title}}</legend>
            <ng-content></ng-content>
            <div class="command-buttons">
                <button class="button button-outline" (click)="form.reset(default);value=null">Reset</button>
                <button class="button" (click)="value=form.value">Submit</button>
            </div>
        </fieldset>
    </form>
    <pre *ngIf="value"><code>{{value | json}}</code></pre>
    <uno-control-monitor *ngIf="debug" [control]='form'></uno-control-monitor>
  `,
    styles: [
        'fieldset{margin:0;border:1px solid #d1d1d1;}',
        'legend{font-size:135%;padding:0 10px;}',
    ]
})
export class UnoFormComponent implements OnChanges {

    @Input() model;
    @Input() title;
    @Output() saved: EventEmitter<any> = new EventEmitter();;
    @Input()
    set debug(value) {
        this._debug = true;
    }
    get debug() { return this._debug; }
    private _debug = false;
    form: FormGroup;
    default: any;
    value;

    constructor() {
        this.form = new FormGroup({});
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.model) {
            this.form.patchValue(this.model);
            this.default = this.model;
        }
    }

    onSave() {
        this.saved.emit(this.form.value);
    }
}
