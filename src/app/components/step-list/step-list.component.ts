import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../store/app.store';

import * as appSelectors from '../../store/app.selectors';

@Component({
    selector: 'step-list',
    template: `
        <step-counter [totalCount]="stepCount$ | async"></step-counter>
        <step *ngFor="let step of steps$ | async; let i = index;" [step]="step" [stepIndex]="i"></step>
    `,
    styleUrls: ['step-list.style.css']
})
export class StepListComponent {
    steps$: Observable<Array<Array<Number>>>;
    stepCount$: Observable<Number>;

    constructor(
        private store: Store<AppState>
    ) {
        this.steps$ = this.store.select(appSelectors.getStepList);
        this.stepCount$ = this.store.select(appSelectors.getStepCount);
    }
}
