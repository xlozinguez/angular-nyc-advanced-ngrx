import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { SortingService } from '../../services/sorting-service';

import { AppState } from '../../store/app.store';

import * as stepListActions from '../../store/step-list/step-list.actions';

@Component({
    selector: 'sort-pick',
    template: `
        <div class="nav navbar-form navbar-right">
            <button
                class="btn btn-default dropdown-toggle"
                type="button"
                id="sortMenu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true">Pick Sort Type
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="sortMenu">
                <li><a href="#">Bubble Sort</a></li>
                <li><a href="#">Selection Sort</a></li>
                <li><a href="#">Insertion Sort</a></li>
                <li><a href="#">Merge Sort</a></li>
                <li><a href="#">Quick Sort</a></li>
                <li><a href="#">Heap Sort</a></li>
            </ul>
            <button class="btn btn-primary" (click)="sort()">Sort!</button>
            <button class="btn btn-danger" (click)="reset()">Clear Steps</button>
        </div>
    `
})
export class SortPickComponent {
    items$: Observable<Array<Number>>;
    items: Array<Number>;

    constructor(
        private store: Store<AppState>,
        private sortingService: SortingService
    ) {}

    sort() {
        this.sortingService.selectionSort();
    }

    reset() {
        this.store.dispatch(new stepListActions.ResetStepListAction(null));
    }
}
