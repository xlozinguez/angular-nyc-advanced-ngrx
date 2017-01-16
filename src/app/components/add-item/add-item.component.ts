import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../store/app.store';

import * as appSelectors from '../../store/app.selectors';
import * as itemListActions from '../../store/item-list/item-list.actions';

@Component({
    selector: 'add-item',
    template: `
        <div class="navbar-form navbar-left">
            <div class="form-group">
                <input
                    class="form-control"
                    placeholder="Enter an item to add"
                    [(ngModel)]="newItem"
                    (keyup.enter)="addItem()">
            </div>
            <button class="btn btn-success" (click)="addItem()">Add Item</button>
            <button class="btn btn-danger" (click)="resetItemList()">Reset List</button>
        </div>
    `
})
export class AddItemComponent {
    items$: Observable<Array<Number>>;
    items: Array<Number>;
    newItem: any = null;

    constructor(
        private store: Store<AppState>
    ) {
        this.items$ = this.store.select(appSelectors.getItemList);
        this.items$.subscribe((items) => { this.items = items; });
    }

    addItem() {
        if (this.newItem) {
            this.store.dispatch(new itemListActions.AddItemAction(this.newItem));
            this.newItem = null;
        }
    }

    resetItemList() {
        this.store.dispatch(new itemListActions.ResetItemListAction(null));
    }
}
