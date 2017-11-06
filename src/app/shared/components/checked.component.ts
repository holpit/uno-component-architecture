import { Component, Input } from '@angular/core';

@Component({
    selector: 'uno-checked',
    template: `
    <span><i *ngIf="checked" class="fa fa-check-circle"></i></span>
    `,
    styles: ['i{color:#27ae60}']
})

export class CheckedComponent {
@Input() checked: boolean;

}