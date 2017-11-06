import { Component } from '@angular/core';

@Component({
    selector: 'uno-home',
    template: `
    <uno-masterpage title="uno components course">
    <ul>
        <li>...component link...</li>
    </ul>
    `
})

export class HomeComponent {
routes = [
    { path: '/simple-control', text: 'Simple control'},
    { path: '/group-controls', text: 'Group controls'}
];

}