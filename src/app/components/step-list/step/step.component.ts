import { Component, Input } from '@angular/core';

@Component({
    selector: 'step',
    template: `
        <step-item-list [stepIndex]="stepIndex" [items]="step"></step-item-list>
    `,
    styleUrls: ['./step.css']
})
export class StepComponent {
    @Input() step: Number[];
    @Input() stepIndex: Number;
}
