import { Component, Input } from '@angular/core';

@Component({
    selector: 'step-item-list',
    template: `
        <ul class="step-item-list">
            <li class="step-index">Step # {{ stepIndex }}</li>
            <li class="step-item" *ngFor="let item of items">{{ item }}</li>
        </ul>
    `,
    styleUrls: ['./step-item-list.css']
})
export class StepItemListComponent {
    @Input() items: Number[];
    @Input() stepIndex: Number;
}
