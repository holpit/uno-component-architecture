import { Component, Input } from '@angular/core';

@Component({
    selector: 'uno-masterpage',
    template: `
        <h1>{{title}}</h1>
        <ng-content></ng-content>
    `
})

export class MasterpageComponent {
@Input() title: string;
}