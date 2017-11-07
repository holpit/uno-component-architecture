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
    { path: '/simple-control', text: 'Simple control'},
    { path: '/group-controls', text: 'Group controls'},
    { path: '/template-controls', text: 'Template-driven controls'},
    { path: '/widget-controls', text: 'Widget controls'}
];

}