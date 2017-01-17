import { Component, Input } from '@angular/core';

@Component({
    selector: 'step-counter',
    template: `
        <div class="step-counter">{{ totalCount }}</div>
    `,
    styleUrls: ['./step-counter.css']
})
export class StepCounterComponent {
    @Input() totalCount: Number;
}
