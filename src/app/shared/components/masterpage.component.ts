import { Component, Input } from '@angular/core';

@Component({
    selector: 'uno-masterpage',
    template: `
        <h1>{{title}}</h1>
        <ng-content></ng-content>
        <p *ngIf="_back"><a routerLink="/"><i class="fa fa-arrow-left" aria-hidden="true"></i> home</a></p>
    `,
    styles: ['p{border-top: 1px solid #ccc;padding-top:5px;margin-top:15px;margin-bottom:5px;}']
})

export class MasterpageComponent {
@Input() title: string;
@Input() set noBack(value){
    this._back = false;
};
_back = true;
}