import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'uno-control-monitor',
    template: `
        <table *ngIf="control">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Status</th>
            <th>P</th>
            <th>D</th>
            <th>T</th>
            <th>U</th>
            <th>Errors</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let ctrl of controls">
            <td>{{ctrl.name}}</td>
            <td>{{ctrl.control.value}}</td>
            <td>{{ctrl.control.status}}</td>
            <td><uno-checked [checked]="ctrl.control.pristine"></uno-checked></td>
            <td><uno-checked [checked]="ctrl.control.dirty"></uno-checked></td>
            <td><uno-checked [checked]="ctrl.control.touched"></uno-checked></td>
            <td><uno-checked [checked]="ctrl.control.untouched"></uno-checked></td>
            <td><small>{{ctrl.control.errors | json}}</small></td>
          </tr>
        </tbody>
        </table>
        <p><strong>P</strong>=Pristine <strong>D</strong>=Dirty <strong>T</strong>=Touched <strong>U</strong>=Untouched </p>
    `
})

export class ControlMonitorComponent implements OnInit {
@Input() control: AbstractControl;
controls: { name: string, control: AbstractControl }[];

    constructor() { }

    ngOnInit(): void {
        this.controls = [];
        this.controls.push({name: 'ROOT', control: this.control});
    }
}