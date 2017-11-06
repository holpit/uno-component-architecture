import { Component } from '@angular/core';

@Component({
    selector: 'uno-home',
    template: `
    <uno-masterpage title="uno components course" noBack>
    <ul>
        <li *ngFor="let route of routes"><a routerLink="{{route.path}}">{{route.text}}</a></li>
    </ul>
    `
})

export class HomeComponent {
routes = [
    { path: '/simple-control', text: 'Simple control'}
];

}