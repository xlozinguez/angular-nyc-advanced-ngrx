import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../store/app.store';

import * as appSelectors from '../../store/app.selectors';
import * as itemListActions from '../../store/item-list/item-list.actions';

@Component({
    selector: 'step-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <step *ngFor="let step of steps" [step]="step"></step>
    `,
    styleUrls: ['step-list.style.css']
})
export class StepListComponent {
    steps$: Observable<Array<any[]>>;
    steps: Array<any[]>;

    constructor(
        private store: Store<AppState>
    ) {
        this.steps$ = this.store.select(appSelectors.getStepList);
        this.steps$.subscribe((steps) => { this.steps = steps; });
    }
}
