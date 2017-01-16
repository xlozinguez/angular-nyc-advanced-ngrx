import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../store/app.store';

import * as appSelectors from '../../store/app.selectors';

@Component({
    selector: 'step-list',
    template: `
        <step *ngFor="let step of steps; let i = index;" [step]="step" [stepIndex]="i"></step>
    `,
    styleUrls: ['step-list.style.css']
})
export class StepListComponent {
    steps$: Observable<Array<Array<Number>>>;
    steps: Array<Array<Number>>;

    constructor(
        private store: Store<AppState>
    ) {
        this.steps$ = this.store.select(appSelectors.getStepList);
        this.steps$.subscribe((steps) => { this.steps = steps; });
    }
}
