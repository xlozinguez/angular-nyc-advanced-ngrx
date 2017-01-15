import { Component, Input } from '@angular/core';

@Component({
    selector: 'step-item-list',
    template: `
        <ul>
            <li *ngFor="let item of items">{{ item }}</li>
        </ul>
    `,
    styleUrls: ['./step-item-list.css']
})
export class StepItemListComponent {
    @Input() items = [];
}
