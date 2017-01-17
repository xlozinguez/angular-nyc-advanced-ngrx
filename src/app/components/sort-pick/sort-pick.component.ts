import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { SortingService } from '../../services/sorting-service';

import { AppState } from '../../store/app.store';

import * as stepListActions from '../../store/step-list/step-list.actions';

import { SortType } from '../../models/sort-type.model';

@Component({
    selector: 'sort-pick',
    template: `
        <div class="nav navbar-form navbar-right">
            <div class="input-group">
                <select class="form-control" (change)="onSelectedSortType($event.target.value)">
                    <option value="bubble">Bubble Sort</option>
                    <option value="selection">Selection Sort</option>
                    <option value="insertion">Insertion Sort</option>
                    <option value="merge">Merge Sort</option>
                    <option value="quick">Quick Sort</option>
                    <option value="heap">Heap Sort</option>
                </select>
            </div>
            <button class="btn btn-primary" (click)="sort()">Sort!</button>
            <button class="btn btn-danger" (click)="reset()">Clear Steps</button>
        </div>
    `
})
export class SortPickComponent {
    constructor(
        private store: Store<AppState>,
        private sortingService: SortingService
    ) {}

    onSelectedSortType(type) {
        this.store.dispatch(new stepListActions.SelectSortTypeAction(type));
    }

    sort() {
        this.sortingService.sort();
    }

    reset() {
        this.store.dispatch(new stepListActions.ResetStepListAction(null));
    }
}
