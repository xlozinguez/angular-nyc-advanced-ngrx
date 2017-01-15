import { Component, Input } from '@angular/core';

@Component({
    selector: 'step',
    template: `
        <step-item-list [items]="step"></step-item-list>
    `,
    styleUrls: ['./step.css']
})
export class StepComponent {
    @Input() step: any[];
}
