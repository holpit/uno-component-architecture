import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'uno-simple-control',
    template: `
    <uno-masterpage title="simple control">
        <label for="driver">Driver name</label>
        <input type="text" id="driver" [formControl]="control">
        <div class="command-buttons">
            <button class="button button-outline" (click)="control.reset('Hamilton');code=''">Reset</button>
            <button class="button" (click)="code = control.value">Submit</button>
        </div>
        <pre *ngIf="code"><code>// control value \n\"{{code}}\"</code></pre>
        <uno-control-monitor [control]='control'></uno-control-monitor>
    </uno-masterpage>
    `
})

export class SimpleControlComponent {
control: FormControl;
code: string;

    constructor(){
        this.control = new FormControl('Vettel');
    }

}